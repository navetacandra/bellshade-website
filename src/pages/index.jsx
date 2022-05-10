import React from 'react';

let renderer = () => {
  return {
    __html: '<button>Hello World!</button>'
  }
}
function Welcome() {
  return (
    <div dangerouslySetInnerHTML={renderer()}>
    </div>
  )
}

export default Welcome