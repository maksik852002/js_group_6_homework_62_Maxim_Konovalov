import React from 'react';
import './Table.css'

const Table = props => {
  let addClass = 'px-1';
  let col1 = '';
  let col2 = '';
  let col3 = '';
  let col4 = '';
  let col5 = '';
  if (props.name === props.combs) {
    addClass += ' bgr' 
  }
  if (props.bet === 1) {
    col1 ='bgr'
  } else if (props.bet === 2) {
    col2 ='bgr'
  } else if (props.bet === 3) {
    col3 ='bgr'
  } else if (props.bet === 4) {
    col4 ='bgr'
  } else if (props.bet === 5) {
    col5 ='bgr'
  }

  return (
 <tr>
    <td className={`text-left ${addClass}`}>{props.name}</td>
    <td className={`text-right ${addClass} ${col1}`}>{props.mltp*1}</td>
    <td className={`text-right ${addClass} ${col2}`} >{props.mltp*2}</td>
    <td className={`text-right ${addClass} ${col3}`} >{props.mltp*3}</td>
    <td className={`text-right ${addClass} ${col4}`} >{props.mltp*4}</td>
    <td className={`text-right ${addClass} ${col5}`} >{props.mltp*5}</td>
  </tr>
  )
}

export default Table;