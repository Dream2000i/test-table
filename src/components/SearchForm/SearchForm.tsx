import React, { FormEvent, useState } from "react";
import icon from '@/assets/icons/search.png';
import './SearchForm.scss';


type SearchFormProps = {
    handleSearchValue: Function;
}


export default function SearchForm({ handleSearchValue }: SearchFormProps) {

    const [inputValue, setInputValue] = useState('');

    const onInput = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setInputValue(target.value);
    }

    const resetForm = () => {
        handleSearchValue('');
        setInputValue('');
    }

    return (
        <div className="search-form">
            <input type="search"
                value={inputValue}
                onInput={onInput}
                placeholder={'Поиск'}
                className="input  search-form__input"
            />

            <button className="button button_icon search-form__button search-form__button_submit"
                onClick={() => handleSearchValue(inputValue)}
            >
                {
                    icon && <img src={icon} alt="" />
                }
            </button>
            {
                inputValue && <button className="button search-form__button search-form__button_reset"
                onClick={resetForm}
            >
                X
            </button>
            }
           
        </div>
    );
}

