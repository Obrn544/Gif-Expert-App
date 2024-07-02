import PropTypes from 'prop-types';
import { useState } from 'react';

export function AddCategory({ onNewCategory }) {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type='text'
                placeholder='Buscar gif'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
