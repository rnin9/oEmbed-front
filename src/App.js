import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Input, Divider } from 'antd';
const { Search } = Input;

function App() {
  //use hooks
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  //when Search Button is clicked
  const onSearch = (value) => {
    axios.get(`http://localhost:3001/data?url=${value}`).then((res) => {
      setData(res.data)
      setIsLoading(true)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className='outerFrame'>
      <div className='headContent'>
        <h1>oEmbed Test</h1>
        {/* Search field, using Ant Design UI Framework */}
        <Search placeholder="input search text" onSearch={onSearch} enterButton="확인" />
      </div >
      {/* content field, loop oEmbed Data Object */}
      <div className='content'>
        { isLoading &&
          Object.entries(data).map(([key, value]) => {
            return (
              <ul>
                <li className='liKey'>{key}</li>
                <li className='liValue'>{value}</li>
              </ul>
            )
          })
        }
      </div>
      <footer>
        <Divider />
      </footer>
    </div >
  );
}


export default App;
