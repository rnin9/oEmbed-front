import './App.css';
import React, { useState } from 'react';
import Parser from 'html-react-parser';
import axios from 'axios';
import { Input, Divider, message, Image } from 'antd';
const { Search } = Input;

function App() {
  //use react hooks
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  /* @brief main Logic when search button isClicked, get oEmbed data from custom backend server.
   * @date 22/01/16
   * @return none  : set state value and print message to client
   * @param value(string) : url Scheme which client typing input
  */
  const onSearch = async (value) => {
    try {
      //get response from custom Backend Server
      const response = await axios.get('http://localhost:3001/data', { params: { url: value } })
      const { data, status } = response
      //when data come from server with 200 statusCode, Sorting Data and show view to client
      if (status === 200) {
        const sortedData = sortData(data)
        setData(sortedData)
        setIsLoading(true)
        message.success('Success to get oEmbed Data!')
      }
      else {
        //when unknown error occurred
        message.error(`Error : unknown DESC: please let developers to know this Problem`)
      }
    }
    catch (err) {
      //when backend Server throw the error, reset view and show message to client
      setData({})
      const { data, status } = err.response
      message.error(`Error: ${status} DESC: ${data.message}`)
    }
  }

  /* @brief sort response data Logic, especially make title key of response object to top
   * @date 22/01/16
   * @return sorted Data (object)  : object which of title key is top
   * @param unsorted Data (object) : response data from backend Server
  */
  const sortData = (data) => {
    if (data.hasOwnProperty('title')) {
      const { title, ...restData } = data
      return { title: title, ...restData }
    }
    return data;
  }

  //view code
  return (
    <div className='outerFrame'>
      <div className='headContent'>
        <h1>oEmbed Test</h1>
        {/* Search field, using Ant Design UI Framework */}
        <Search placeholder="input search URL Scheme" onSearch={onSearch} enterButton="확인" />
      </div >
      {/* content field, loop oEmbed Data Object */}
      <div className='content'>
        <Divider />
        {isLoading &&
          Object.entries(data).map(([key, value]) => {
            if (key === 'title') {
              return (
                <ul key={key}>
                  <li className='liKey'>{key}</li>
                  <li className='liValue'><h3>{value}</h3></li>
                  <Divider />
                </ul>
              )
            } else if (key === 'thumbnail_url') {
              return (<ul key={key}>
                <li className='liKey'>{key}</li>
                <li className='liValue'><a href={value}>{value}</a></li>
                <li className='liKey'></li>
                <div>
                  <li className='liValue'><Image src={value} width={data.thumbnail_width} height={data.thumbnail_height} alt="asd">{value}</Image></li>
                </div>
                <Divider />
              </ul>
              )
            } else if (key === 'html') {
              //TODO: iframe src= a tag
              return (<ul key={key}>
                <li className='liKey'>{key}</li>
                <li className='liValue'><a href={value}>{value}</a></li>
                <li className='liKey'></li>
                <div>
                  {Parser(value)}
                </div>
                <Divider />
              </ul>
              )
            }
            else if (typeof(value) ==='string' && value.match('http')) {
              return (<ul key={key}>
                <li className='liKey'>{key}</li>
                <li className='liValue'><a href={value}>{value}</a></li>
              </ul>
              )
            }
            else {
              return (
                <ul key={key}>
                  <li className='liKey'>{key}</li>
                  <li className='liValue'>{value}</li>
                  <Divider />
                </ul>

              )
            }
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
