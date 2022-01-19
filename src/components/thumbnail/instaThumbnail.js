import React from 'react';
import { Divider, Image } from 'antd';

function instaThumbnail(props) {
  return (
    <ul key={props.keyName}>
      <li className='liKey'>{props.keyName}</li>
      <li className='liValue'><a href={props.value}>{props.value}</a></li>
      <li className='liKey'></li>
      <div>
        <li className='liValue'><Image title={props.keyName} alt='error' src={props.value} width={props.width} height={props.height} fallback={process.env.PUBLIC_URL + 'instaImage/error.jpg'}> {props.value}</Image></li>
        </div>
          <Divider />
        </ul>
        )    
}

        export default instaThumbnail;