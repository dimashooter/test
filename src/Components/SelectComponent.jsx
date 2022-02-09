import React from 'react';

function SelectComponent({ options, defaultValue, value, onChange }) {
	return (
		<select value={value} onChange={e => onChange(e.target.value)}>
			<option disabled value="">
				{defaultValue}
			</option>
			{options.map((option, i) => (
				<option key={option + i} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
}

export default SelectComponent;
