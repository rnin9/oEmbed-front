import React from 'react';
import { Divider, Image } from 'antd';

/* @brief show thumbnail with preview of image when URL scheme's hostname is instagram
          @Notice :there is a SOP Policy issue, so we have to find circumvent way.
*  @param keyname : name of json
          value   : value of matched json key
          width   : value of image width
          height  : value of image height
          path    : instagram image path (saved file path on Server)
*/
function instaThumbnail(props) {
  return (
    <ul key={props.keyName}>
      <li className='liKey'>{props.keyName}</li>
      <li className='liValue'><a href={props.value}>{props.value}</a></li>
      <li className='liKey'></li>
      <div>
        <li className='liValue'><Image title={props.keyName} alt='error' src={props.value} width={props.width} height={props.height} fallback={process.env.PUBLIC_URL + 'instagramImage/error.jpg'}> {props.value}</Image></li>
        </div>
        <li className='liKey'>Instagram Image path </li>
        <li className='liValue'>{props.path}</li>
          <Divider />
        </ul>
        )    
}

        export default instaThumbnail;