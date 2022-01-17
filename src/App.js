import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Input, Divider, message } from 'antd';
const { Search } = Input;

function App() {
  //use react hooks
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const onSearch = async (value) => {
    try {
      const response = await axios.get('http://localhost:3001/data', { params: { url: value } })
      const { data, status } = response
      if (status === 200) {
        const sortedData = sortData(data)
        setData(sortedData)
        setIsLoading(true)
        message.success('Success to get oEmbed Data!')
      }
      else {
        message.error(`Error : unknown DESC: please let developers to know this Problem`)
      }
    }
    catch (err) {
      setData({})
      const { data, status } = err.response
      message.error(`Error: ${status} DESC: ${data.message}`)
    }
  }
  // 위에거 발전방향 => 400 오류에따라서 alert오는거 다르게, 화면 바뀌게, 
  const sortData = (data) => {
    if (data.hasOwnProperty('title')) {
      const { title, ...restData } = data
      return { title: title, ...restData }
    }
    return data;
  }

  return (
    <div className='outerFrame'>
      <div className='headContent'>
        <h1>oEmbed Test</h1>
        {/* Search field, using Ant Design UI Framework */}
        <Search placeholder="input search URL Scheme" onSearch={onSearch} enterButton="확인" />
      </div >
      {/* content field, loop oEmbed Data Object */}
      <div className='content'>
        {isLoading &&
          Object.entries(data).map(([key, value]) => {
            return (
              <ul key={key}>
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
