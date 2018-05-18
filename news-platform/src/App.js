import React, { Component } from "react";
import {Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import {Routes} from './RouterDirectives'
import {NewsFront} from './Presentational/NewsFront'
import {NewsPage} from './Presentational/NewsPage'
import {withRouter} from  'react-router-dom'



class AppBase extends Component {
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
export const App = AppBase
