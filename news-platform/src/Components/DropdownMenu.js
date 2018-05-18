import ReactDOM from 'react-dom';
import React from 'react';
import { Menu, Dropdown, Icon, Submenu } from 'antd';
import {connect} from 'react-redux';
import {store} from '../storeConfig'


const menu = (
	<Menu>
		<Menu.Item onClick={()=> store.dispatch({type:'ORDER_BY_TITLE'})}>Title</Menu.Item>
		<Menu.Item onClick={()=> store.dispatch({type:'ORDER_BY_DATE'})}>Date</Menu.Item>
	</Menu>
);

ReactDOM.render(
	<Dropdown overlay={menu} trigger={['click']}>
		<a className="ant-dropdown-link" href="#">
			Sort By <Icon type="down" />
		</a>
	</Dropdown>
	, document.getElementById('NewsFilter'));