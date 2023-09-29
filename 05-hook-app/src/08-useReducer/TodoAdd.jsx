import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const {form, onInputChange,onResetForm} = useForm({description: ''});
  const {description} = form;

  const onSubmit = (evt) => {
    evt.preventDefault();
    const {value} = evt.target.description;
    if (value.length <= 5) return;

    const newTodo = {
      id: new Date().getTime(),
      description: value,
      done: false
    }

    onResetForm();
    onNewTodo(newTodo);
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={description}
        name="description"
        onChange={onInputChange}
      />

      <button 
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
