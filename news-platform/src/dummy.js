<List
	grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 3 }}
	itemLayout="vertical"
	dataSource={this.props.records}
	renderItem={item => (
		<List.Item>
			<Card title={item.title} extra={item.createdat} >
				<Card type="inner">
					{item.shortdesc}
				</Card>
			</Card>
		</List.Item>
	)}
/>