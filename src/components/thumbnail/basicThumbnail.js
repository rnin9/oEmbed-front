import React from 'react';
import { Divider, Image } from 'antd';

function basicThumbnail(props){
    console.log(props.value, typeof props.value ==='string')
    return(
        <ul key={props.keyName}>
                <li className='liKey'>{props.keyName}</li>
                <li className='liValue'><a href={props.value}>{props.value}</a></li>
                <li className='liKey'></li>
                <div>
                  <li className='liValue'><Image src={props.value} width={props.width} height={props.height} alt="asd">{props.value} </Image></li>
                </div>
                <Divider />
              </ul>
    )    
}

export default basicThumbnail;