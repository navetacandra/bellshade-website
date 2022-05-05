import React from 'react';

let renderer = () => {
  return {
    __html: '<button>Hello World!</button>'
  }
}

function Welcome() {
  return (
    <div>
      <div dangerouslySetInnerHTML={renderer()}></div>
    </div>
  )
}

export default Welcome