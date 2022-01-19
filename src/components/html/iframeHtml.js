import React from 'react';
import Parser from 'html-react-parser';
import '../home.css';
import { Divider } from 'antd';

/* @brief convert string to html
*  @param keyname : name of json
          value   : value of matched json key
*/
function iframeHtml(props) {
  return (
    <ul key={props.keyName}>
      <li className='liKey'>{props.keyName}</li>
      <li className='liValue'>{props.value} </li>
      <li className='liKey'></li>
      <div>
        {Parser(props.value)}
      </div>
      <Divider />
    </ul>
  )
}


export default iframeHtml;