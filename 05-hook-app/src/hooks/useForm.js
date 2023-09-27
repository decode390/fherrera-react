import { useState } from "react"

export const useForm = (initialForm = {username: ''}) => {

  const [ form, setForm ] = useState(initialForm);

  const onInputChange = (evt) => {
    const {name, value} = evt.target;
    setForm({
      ...form,
      [name] : value
    })
  }

  const onResetForm = () => setForm(initialForm);

  return {
    form,
    onInputChange,
    onResetForm,
  }
  
}
