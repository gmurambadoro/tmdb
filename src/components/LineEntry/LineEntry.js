import React, {useState} from "react";

export default function LineEntry({ handleValueSubmitted }) {
    const [value, setValue] = useState('');

    const handleChange = event => setValue(event.currentTarget.value);

    const handleSubmit = event => {
        event.preventDefault();

        if (!value.trim().length) {
            return;
        }

        handleValueSubmitted(value);

        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type={"text"}
                value={value}
                name={"apiKey"}
                onChange={handleChange}
                required
            />
        </form>
    );
}