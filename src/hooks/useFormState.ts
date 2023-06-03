import { useReducer, useEffect, useCallback } from 'react';
import { FormInitStateType } from '../types';

const initialState: FormInitStateType = {
  price: 20,
  basic: 0,
  senior: 0,
  total: 0,
};

const getInitialState = (): FormInitStateType => {
  const formState = localStorage.getItem('formState');
  return formState ? JSON.parse(formState) : initialState;
};

const reducer = (state: FormInitStateType, action) => {
  switch (action.type) {
    case 'changed_price':
      return {
        ...state,
        price: action.price,
        total: action.price * state.basic + (action.price * state.senior) / 2,
      };
    case 'changed_basic':
      return {
        ...state,
        basic: action.basic,
        total: state.price * action.basic + (state.price * state.senior) / 2,
      };

    case 'changed_senior':
      return {
        ...state,
        senior: action.senior,
        total: state.price * state.basic + (state.price * action.senior) / 2,
      };

    default:
      return state;
  }
};

const useFormState = () => {
  const [state, dispatch] = useReducer(reducer, initialState, getInitialState);

  useEffect(() => {
    localStorage.setItem('formState', JSON.stringify(state));
  }, [state]);

  const setPrice: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      dispatch({
        type: 'changed_price',
        price: Number(e.target.value),
      });
    },
    []
  );

  const setAmount = useCallback((name: string, value: number, step: 1 | -1) => {
    dispatch({
      type: `changed_${name}`,
      [name]: value + step,
    });
  }, []);

  return { ...state, setPrice, setAmount };
};

export default useFormState;
