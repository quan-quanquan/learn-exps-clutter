import React from 'react';
import {Link} from 'react-router-dom';
import './style/App.css';

class App extends React.Component {
  render () {
    const cats = [
      {
        path: '/display',
        name: 'css中的display属性demo'
      }
    ]
    return (
      <div className="App">
        {cats.map(item => 
          <Link to={item.path}>{item.name}</Link>
        )}
      </div>
    );
  } 
}

export default App;
