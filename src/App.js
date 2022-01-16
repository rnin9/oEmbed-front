import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Input, Divider, Descriptions, } from 'antd';
const { Search } = Input;

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
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
        <Search placeholder="input search text" onSearch={onSearch} enterButton="확인" />
      </div >
      <div>
        <Descriptions>{
          Object.entries(data).map(([key, value]) => {
            return(<Descriptions.Item label={key} span={3}>
              {value}
            </Descriptions.Item>)
          })
        }
        </Descriptions>
      </div>
      <footer>
        <Divider />
      </footer>
    </div >
  );

}


export default App;
