import React       from 'react'
import { connect } from 'react-redux'

import { NEW_RECIPE } from '../../types/modal.types'
import { showModal }  from '../../actions/modal.actions'

import Header from '../Commons/Header'
import Button from '../Commons/Button'

const BoxHeader = ({ title, showRecipeForm }) => (
	<Header className="box-header">
		<h2 className="box-title">{title}</h2>
		<Button
			text="New Recipe"
			className="add-recipe"
			onClick={showRecipeForm} />
	</Header>
)

const mapDispatchToProps = (dispatch) => ({
	showRecipeForm: () => dispatch(showModal(NEW_RECIPE))
})

export default connect(null, mapDispatchToProps)(BoxHeader)
