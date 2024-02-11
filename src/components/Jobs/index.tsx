import React from 'react';

const Jobs = () => {

    const handleClick = ()=> console.log('Button clicked');
  return (
    <>
    <h3>Jobs component</h3>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default Jobs