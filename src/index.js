// import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link } from 'react-router'
// import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
ReactDOM.render((
  <Router>
    <Route path="/k" component={App}>
    </Route>
  </Router>
), document.getElementById('root'))
