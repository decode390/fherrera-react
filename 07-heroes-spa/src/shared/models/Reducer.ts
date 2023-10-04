import { Dispatch } from "react"

export interface ActionReducerModel<T, P = any> {
  type: T,
  payload?: P
}

export interface ContextReducerBase<S, A> {
  contextData: S
  dispatchContext: Dispatch<ActionReducerModel<A>>
}
