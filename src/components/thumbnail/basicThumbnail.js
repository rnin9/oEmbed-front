import React from 'react';
import { Divider, Image } from 'antd';

/* @brief show thumbnail with preview of image (default)
*  @param keyname : name of json
          value   : value of matched json key
          width   : value of image width
          height  : value of image height
*/
function basicThumbnail(props){
    return(
        <ul key={props.keyName}>
                <li className='liKey'>{props.keyName}</li>
                <li className='liValue'><a href={props.value}>{props.value}</a></li>
                <li className='liKey'></li>
                <div>
                  <li className='liValue'><Image src={props.value} width={props.width} height={props.height} alt="img">{props.value} </Image></li>
                </div>
                <Divider />
              </ul>
    )    
}

export default basicThumbnail;