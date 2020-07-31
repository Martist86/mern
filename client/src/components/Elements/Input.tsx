import React from 'react';

interface IProps {
    onChange: (name: string, value: string) => void
    label?: string;
    placeholder?: string;
    className?: string;
    type?: string;
    value?: string;
    name: string;
}

const Input = (props: IProps) => {
    const onChange = (e: React.FormEvent<HTMLInputElement>) => props.onChange(e.currentTarget.name, e.currentTarget.value);        

    return (
        <div className={`${props.className || ''} at-input`}>
            {props.label && <label className="label-input">{props.label}</label>}
            <input
                type={props.type || 'text'}
                placeholder={props.placeholder || ''}
                name={props.name}
                value={props.value || ''}
                onChange={onChange}
            />
        </div>
    )

}
export default Input;