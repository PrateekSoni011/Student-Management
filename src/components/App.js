import React from 'react';
// import Header from './Header';
import '../Styles/App.css';

function App(props) {
  
  return (    
    <div className="App">            
      {/* <Header/> */}
			{props.children}
    </div>
  );
}

export default App;
