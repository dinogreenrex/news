import ReactDOM from 'react-dom';
import React from 'react';
import { Menu, Dropdown, Icon, Submenu } from 'antd';
import {connect} from 'react-redux';
import {store} from '../storeConfig'
import {WrappedLoginForm} from './LoginForm'

const loginform = (
	<WrappedLoginForm />
);

ReactDOM.render(
	<Dropdown overlay={loginform} trigger={['click']} placement="topRight">
		<a className="ant-dropdown-link-right" href="#">
			Login <Icon type="login" />
		</a>
	</Dropdown>
	, document.getElementById('loginlink'));