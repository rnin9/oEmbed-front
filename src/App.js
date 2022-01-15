import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Divider } from 'antd';
const { Search } = Input;

function App() {
  const [data, setData] = useState({});
  const [url, setUrl] = useState('')
  useEffect(() => {
    onSearch()
  }, [data])

  const onSearch = () => {
    const response = axios.get(`http://localhost:3001/data?url=${url}`)
    setData(response.data)
    console.log(data)
  }
  return (
    <div className='outerFrame'>
      <header className='headContent'>
        <h1>oEmbed Test</h1>
        <input color='#f1f3f4' name="value" type="text" onChange={(e) => { setUrl(e.target.value) }} />
        <input type="button" onClick={onSearch()} />
      </header >
      <div>
        <ul>
          {data && Object.entries(data).forEach((keys, val) => {
            <li key={val}>{keys}: {val}</li>
          })}
        </ul>
      </div>
      <footer>
        <Divider />
      </footer>
    </div >
  );

}


export default App;
