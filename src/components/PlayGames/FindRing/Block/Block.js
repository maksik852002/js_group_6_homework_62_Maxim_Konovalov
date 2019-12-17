import React from 'react';
import './Block.css'

const Block = props => {
  let addClass = 'back';
  props.checked && (addClass = 'front');
  props.checked && props.hastlem && (addClass = 'open');
  return (
    <div onClick={props.click} className={`blk ${addClass}`}></div>
  )
}

export default Block;