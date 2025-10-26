import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit', name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    defaultValue={email}
                    onChange={emailOnChange}
                    type="email" name="" id="" />
                <br />
                <input
                    defaultValue={name}
                    onChange={nameOnChange}
                    type="text" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;