import React from 'react'
import './header.style.sass'

import cls from 'classnames'

export default (props) => (
	<div
		{...props}
		className={cls("common-header", props.className)}>
		{props.children}
	</div>
)
