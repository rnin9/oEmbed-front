import React from 'react';
import { Divider } from 'antd';

/* @brief show basic form of json data
*  @param keyname : name of json
          value   : value of matched json key
*/
function basicForm(props) {
        return (
            <ul key={props.keyName}>
                <li className='liKey'>{props.keyName}</li>
                <li className='liValue'>{props.value}</li>
                <Divider />
            </ul>
        )    
}

export default basicForm;