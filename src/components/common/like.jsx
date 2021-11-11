import React, { Component } from 'react';

const Like = (props) => {
    let classes = "fa fa-heart";
        if(!props.like) classes += "-o"
    return ( 
        <i 
            className={ classes }
            style={{ cursor: "pointer" }}
            onClick= { props.onClick }
        />
     );
}
 
export default Like;

