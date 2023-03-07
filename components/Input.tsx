import React from "react";

interface InputProps {
	id: string;
	label: string;
	name: string;
	placeholder: string;
    type: string;
    value: string;
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, name, label, placeholder, type, value, onChange, ...props }: InputProps) => {
	return (
		<div className='w-full mb-3'>
			<label className='block text-lg' htmlFor={id}>
				{label}
			</label>
			<input
                required={true}
				autoComplete='off'
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='w-full text-gray-900 placeholder-gray-400 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-blue-700'
				{...props}
			/>
		</div>
	);
};

export default Input;
