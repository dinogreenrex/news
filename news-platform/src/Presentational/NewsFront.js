import React, {Component} from 'react';
import { Modal, Button, List, Card,Col, Row, Pagination, Table, Dropdown, Menu, Icon } from 'antd';
import 'antd/lib/modal/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/list/style/css'
import 'antd/lib/card/style/css'
import 'antd/lib/table/style/css'
import 'antd/lib/menu/style/css'
import axios from 'axios'
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import './NewsFront.css'


class NewsFrontBase extends Component {
	componentDidMount(){
		this.props.dispatch(dispatch => {
			dispatch({type: `LOAD_NEWS`});
			axios.get(`http://localhost/api/news`, {
			}).then(
				(response) => {
					dispatch({type: `LOAD_NEWS_SUCCESS`, payload: response.data} );
				},

				(error) => {
					dispatch({type: `LOAD_NEWS_ERROR`, error: error.response.data.message })
				}
			)
		})
	}
	loadRecord(id){
		this.props.dispatch(dispatch => {
			dispatch({type: `LOAD_RECORD`});
			axios.get(`http://localhost/api/news/${id}`, {
			}).then(
				(response) => {
					dispatch({type: `LOAD_RECORD_SUCCESS`, payload: response.data} );
				},
				(error) => {
					dispatch({type: `LOAD_RECORD_ERROR`, error: error.response.data.message })
				}
			)
		})
	}
	render(){

		return(
			<div>
				<List className="CoolNewsList"
					grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
					itemLayout="vertical"
					dataSource={this.props.records}
					pagination={true}
					renderItem={item => (
						<List.Item>
							<div className="NewsPageContainer">
								<div className="NewsTitle"> <Link to={`/news/${item.id}`} onClick={() => this.loadRecord(item.id)}>{item.title}</Link> </div>
								<div className="NewsDate">{item.createdat}</div>
								<div className="clear"></div>
								<div className="NewsDesc">{item.shortdesc}</div>
							</div>
						</List.Item>
					)}
				/>
			</div>

		)
	}
}
export const NewsFront = connect(state => {
	return {
		records: state.news.records,
	}
})(NewsFrontBase);