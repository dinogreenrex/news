import React, { Component } from "react";
import {Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import {Routes} from './RouterDirectives'
import {NewsFront} from './Presentational/NewsFront'



export class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="navigation" style={{padding: '10px'}}>
        <NewsFront />
      </div>
    )


  }
}

