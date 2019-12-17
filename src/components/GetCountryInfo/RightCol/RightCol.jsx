import React from 'react';

  const RightCol = props => (
    <div className='col-8 my-4'>
      <div className='p-3 border border-secondary rounded bg-trans'>
        {props.children}
      </div>
    </div>
  );

export default RightCol;