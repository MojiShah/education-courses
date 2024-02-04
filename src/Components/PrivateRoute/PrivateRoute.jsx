import React from 'react';
import Panel from '../Panel/Panel';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute(props) {

    return (
        <div>
            {
                props.login ? 
                (<Panel />)
                :
                (<Navigate to='/signin' />)
            }
        </div>
    )
}
