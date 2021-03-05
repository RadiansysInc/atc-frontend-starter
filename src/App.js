import React from 'react';
import './App.scss';
import RouteLinks from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App home-bg">
      <RouteLinks />
    </div>
  );
}

export default App;

