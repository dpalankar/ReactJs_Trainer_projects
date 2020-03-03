import React from 'react';
const color = {
    primary: 'black',
    secondary: 'green'
}
function BigHeading(props){
    return <h1 style={{fontSize: '2rem', color: props.color?color[props.color]:color['primary']}}>{props.children}</h1>
}
function SmHeading(props){
    return <h3 style={{fontSize: '1.3rem', color: props.color?color[props.color]:color['primary']}}>{props.children}</h3>
}
function RegularTxt(props){
    return <p>{props.children}</p>
}
export {BigHeading, RegularTxt, SmHeading}