// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthentication && <p>please log in to view info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthentication={false} info="this is detail"/>,document.getElementById('app'));