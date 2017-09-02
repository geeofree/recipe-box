import React from 'react'
import './input.style.sass'

export const TextInput = ({ label, identifier, type, value, onChange, placeholder }) => (
	<div className="text-input-container">
		<label className="text-input-label">{label}</label>
		<input
			value={value}
			name={identifier}
			onChange={onChange}
			type={type || "text"}
			className="text-input"
			placeholder={placeholder} />
	</div>
)

export const TextArea = ({ label, identifier, type, value, onChange, placeholder }) => (
	<div className="text-input-container">
		<label className="text-input-label">{label}</label>
		<textarea
			value={value}
			name={identifier}
			onChange={onChange}
			type={type || "text"}
			className="text-input"
			placeholder={placeholder}/>
	</div>
)
