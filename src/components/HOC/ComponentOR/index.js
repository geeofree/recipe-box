import React from 'react'
import { connect } from 'react-redux'

const ComponentOR = (DefaultComponent, FallbackComponent) => {

	const WrapperComponent = (props) => (
		!props.isEditting ? <DefaultComponent {...props} /> : <FallbackComponent {...props} />
	)

	const mapStateToProps = ({ recipe }) => ({
		isEditting: recipe.isEditting
	})

	return connect(mapStateToProps)(WrapperComponent)
}

export default ComponentOR
