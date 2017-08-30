import React from 'react';
import ReactDOM from 'react-dom';

//Create new component. This should produce some HTML
const App = () => {
  return <div>Hello there!</div>
}

//Take this component's generated HTML and put it in the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
