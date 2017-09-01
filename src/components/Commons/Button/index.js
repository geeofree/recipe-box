import React from 'react'
import './button.style.sass'

import classnames from 'classnames'

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.mouseUp	 = this.mouseUp.bind(this)
		this.mouseDown = this.mouseDown.bind(this)
		this.state = { clicked: false }
	}

	mouseDown() {
		this.setState({ clicked: true })
	}

	mouseUp() {
		const { onClick } = this.props

		if(onClick) onClick()
		this.setState({ clicked: false })
	}

	render() {
		const { props, state, mouseUp, mouseDown } = this
		const { className, text } = props
		const { clicked } = state

		return (
			<div
				onMouseUp={mouseUp}
				onMouseDown={mouseDown}
				className={classnames('btn', { clicked } , className)}>
				{text}
			</div>
		)
	}
}



export default Button
