import React from 'react';
import '../App.css';
import { Divider } from 'antd';

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