import React from 'react';
import Parser from 'html-react-parser';
import '../../App.css';
import { Divider } from 'antd';
function iframeHtml(props) {
        return (
            <ul key={props.keyName}>
                    <li className='liKey'>{props.keyName}</li>
                    <li className='liValue'><a href={props.value}>{props.value}</a></li>
                    <li className='liKey'></li>
                    <div>
                      {Parser(props.value)}
                    </div>
                    <Divider />
                  </ul>
        )
}


export default iframeHtml;