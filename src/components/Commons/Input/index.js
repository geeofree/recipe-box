import React from 'react'
import './input.style.sass'

export const TextInput = ({ label, identifier, type, onChange, placeholder }) => (
	<div className="text-input-container">
		<label className="text-input-label">{label}</label>
		<input
			className="text-input"
			name={identifier}
			type={type || "text"}
			onChange={onChange}
			placeholder={placeholder}/>
	</div>
)

export const TextArea = ({ label, identifier, type, onChange, placeholder }) => (
	<div className="text-input-container">
		<label className="text-input-label">{label}</label>
		<textarea
			className="text-input"
			name={identifier}
			type={type || "text"}
			onChange={onChange}
			placeholder={placeholder}/>
	</div>
)
