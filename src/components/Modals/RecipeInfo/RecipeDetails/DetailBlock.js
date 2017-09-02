import React from 'react'

const DetailBlock = ({ recipeName, author, dateCreated }) => (
	<div className="detail-block">
		<h2 className="recipe-name">{recipeName}</h2>
		<div className="meta-data-container">
			<span>{author}</span>
			<span>{dateCreated}</span>
		</div>
	</div>
)

export default DetailBlock
