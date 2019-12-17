import React from 'react';

const SendMessageForm = props => (
  <form onSubmit={props.send} className="mt-4">
    <div className="input-group mb-3">
      <input onChange={props.author} type="text" required className="form-control col-3" placeholder="Enter Author"/>
      <input onChange={props.input} type="text" required className="form-control col-9" value={props.value} placeholder="Enter Message"/>
      <div className="input-group-append">
        {props.children}
      </div>
    </div>
  </form>
);

export default SendMessageForm;