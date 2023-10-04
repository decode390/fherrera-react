import { useState } from "react"

export const useForm = (initialForm: any = {username: ''}) => {

  const [ form, setForm ] = useState(initialForm);

  const onInputChange = (evt:any) => {
    const {name, value} = evt.target;
    setForm((currentForm: any) => ({
      ...currentForm,
      [name] : value
    }));
  }

  const onResetForm = () => setForm(initialForm);

  return {
    form,
    onInputChange,
    onResetForm,
  }
  
}
