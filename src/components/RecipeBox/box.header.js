import React from 'react'

import Header from '../Commons/Header'
import Button from '../Commons/Button'

export default ({ title }) => (
	<Header className="box-header">
		<h2 className="box-title">{title}</h2>
		<Button text="Add Recipe" className="add-recipe" />
	</Header>
)
