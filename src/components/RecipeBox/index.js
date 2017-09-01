import React from 'react'
import './box.style.sass'

import BoxHeader from './box.header'
import BoxBody   from './box.body'

export default () => (
	<div className="recipe-box">
		<BoxHeader title="Recipe Box"/>
		<BoxBody />
	</div>
)
