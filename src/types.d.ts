import { ReactNode } from 'react';

export type MenuBurgerType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MenuPropsType = {
  position: 'header' | 'footer';
  isBurger?: boolean;
} & Partial<Pick<MenuBurgerType, 'isActive' | 'setIsActive'>>;

export type FieldRadioProps = {
  className: string;
  label: string;
  name: string;
  constValue: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
};

export type FieldNumberProps = {
  value: number;
  handleClick: (name: string, value: number, step: 1 | -1) => void;
} & Omit<FormFieldRadioProps, 'constValue' | 'isChecked' | 'handleChange'>;

export type FieldValueType = {
  value: string;
  error: boolean;
};

export type FieldNamesType = 'name' | 'phone' | 'email' | 'date' | 'time';

export type FieldInputProps = {
  children: ReactNode;
  className: string;
  type: string;
  name: FieldNamesType;
  placeholder: string;
  min?: string;
  max?: string;
};

export type FormInitStateType = {
  price: number;
  basic: number;
  senior: number;
  total: number;
  date: string;
  time: string;
  name: FieldValueType;
  phone: FieldValueType;
  email: FieldValueType;
};

export type ActionType =
  | {
      type: 'price';
      price: number;
    }
  | {
      type: 'basic';
      basic: number;
    }
  | {
      type: 'senior';
      senior: number;
    }
  | {
      type: 'name';
      name: string;
    }
  | {
      type: 'phone';
      phone: string;
    }
  | {
      type: 'email';
      email: string;
    }
  | {
      type: 'date';
      date: string;
    }
  | {
      type: 'time';
      time: string;
    };
