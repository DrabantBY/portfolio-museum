import { useReducer, useEffect, useCallback } from 'react';
import { FormInitStateType, ActionType } from '../types';

const initialState: FormInitStateType = {
  price: 0,
  basic: 0,
  senior: 0,
  total: 0,
  date: '',
  time: '',
  name: { value: '', error: false },
  phone: { value: '', error: false },
  email: { value: '', error: false },
};

const getInitialState = (): FormInitStateType => {
  const formState = localStorage.getItem('formState');
  return formState ? JSON.parse(formState) : initialState;
};

const reducer = (state: FormInitStateType, action: ActionType) => {
  switch (action.type) {
    case 'price':
      return {
        ...state,
        price: action.price,
        total: action.price * state.basic + (action.price * state.senior) / 2,
      };

    case 'basic':
      return {
        ...state,
        basic: action.basic,
        total: state.price * action.basic + (state.price * state.senior) / 2,
      };

    case 'senior':
      return {
        ...state,
        senior: action.senior,
        total: state.price * state.basic + (state.price * action.senior) / 2,
      };

    case 'name':
      return {
        ...state,
        name: {
          value: action.name,
          error: !/^([a-z\s]{3,15})?$/i.test(action.name),
        },
      };

    case 'phone':
      return {
        ...state,
        phone: {
          value: action.phone,
          error: !/^(\d{6,10})?$/.test(action.phone),
        },
      };

    case 'email':
      return {
        ...state,
        email: {
          value: action.email,
          error: !/^([a-zA-Z\d_-]{3,15}@[a-z]{4,}\.[a-z]{2,})?$/i.test(
            action.email
          ),
        },
      };

    case 'date':
      return {
        ...state,
        date: action.date,
      };

    case 'time':
      return {
        ...state,
        time: action.time,
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
        type: 'price',
        price: Number(e.target.value),
      });
    },
    []
  );

  const setAmount = useCallback((name: string, value: number, step: 1 | -1) => {
    return dispatch({
      type: name,
      [name]: value + step,
    } as ActionType);
  }, []);

  const setInputValue: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      dispatch({
        type: e.target.name,
        [e.target.name]: e.target.value,
      } as ActionType);
    },
    []
  );

  return { state, setPrice, setAmount, setInputValue };
};

export default useFormState;
