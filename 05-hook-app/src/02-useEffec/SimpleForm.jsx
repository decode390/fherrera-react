import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
  });

  const {username, email} = form;

  const onInputChange = (evt) => {
    const {name, value} = evt.target;
    setForm({
      ...form,
      [name] : value
    })
  }

  useEffect(()=>{
    /* console.log('use effect'); */
  }, []);

  useEffect(()=>{
    /* console.log('form changed'); */
  }, [form]);

  useEffect(()=>{
    /* console.log('email changed'); */
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'strider2') && <Message />
      }
    </>
  )
}
