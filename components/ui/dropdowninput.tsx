import React, { SelectHTMLAttributes } from 'react';

type Option = {
    label: string;
    value: string;
}

interface DropDownInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}


export default function DropDownInput(props: DropDownInputProps) {
    return <select className="border border-black p-2 w-full" {...props}>
        {
            props.options.map((option) =>
                <option value={option.value} key={option.value}>{option.label}
                </option>
            )
        }
    </select>
}
