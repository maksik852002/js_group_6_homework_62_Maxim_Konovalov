import React from 'react';

const Button = props => (
  <button
  onClick={props.click?props.click:null}
  className={`btn ${props.addClass==='close' ? props.addClass : ['btn', props.addClass].join('-')}`}
  type={props.type}
>
  {props.label}
</button>
);

export default Button;