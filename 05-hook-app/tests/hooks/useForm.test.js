import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils";

describe('test in useForm hook', () => {
  const initialForm = {
    firstName: 'John',
    lastName: 'Doe'
  }
  
  test('should be return default form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      form: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should be change firstName in form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange} = result.current;

    act(() => {
      onInputChange({target: {name: 'firstName', value: 'Jane'}});
    });

    expect(result.current.form).toEqual({
      ...initialForm,
      firstName: 'Jane'
    });
  });
  
  test('should be reset form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const {onInputChange, onResetForm} = result.current;

    act(() => {
      onInputChange({target: {name: 'firstName', value: 'Jane'}});
      onInputChange({target: {name: 'lastName', value: 'Roe'}});
      onResetForm();
    });

    expect(result.current.form).toEqual(initialForm);
  });

});
