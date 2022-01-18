import React from 'react';
import Parser from 'html-react-parser';
import '../../App.css';
import { Divider } from 'antd';
function tweetHtml(props) {
        return (
            <ul key={props.keyName}>
                    <li className='liKey'>{props.keyName}</li>
                    <li className='liValue'>{props.value}</li>
                    <li className='liKey'></li>
                    <div>
                      {Parser(props.value)}
                    </div>
                    <Divider />
                  </ul>
        )
}


export default tweetHtml;