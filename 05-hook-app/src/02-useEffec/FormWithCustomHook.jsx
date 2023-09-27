import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {form, onInputChange, onResetForm} = useForm({
    username: '',
    email: '',
    password: '',
  })

  const {username, email, password} = form;

  return (
    <>
      <h1>Form with custom hook</h1>
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

      <input
        className="form-control mt-2"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-dark mt-2">Reset</button>

    </>
  )
}
