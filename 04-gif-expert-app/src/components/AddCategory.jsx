import { useState } from 'react'
import { PropTypes } from "prop-types";


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target})=>{
    setInputValue(target.value)
  }

  const onSubmitForm = (evt)=>{
    evt.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    /* setCategories(categories=>[inputValue, ...categories]); */
    setInputValue('');
  }

  return (
    <form aria-label='search' onSubmit={onSubmitForm}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}
