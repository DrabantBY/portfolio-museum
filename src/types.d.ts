import { ReactNode } from 'react';

export type MenuBurgerType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MenuPropsType = {
  position: 'header' | 'footer';
  isBurger?: boolean;
} & Partial<Pick<MenuBurgerType, 'isActive' | 'setIsActive'>>;

export type FormFieldRadioProps = {
  className: string;
  label: string;
  name: string;
  constValue: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
};

export type FormFieldNumberProps = {
  value: number;
  handleClick: (name: string, value: number, step: 1 | -1) => void;
} & Omit<FormFieldRadioProps, 'constValue' | 'isChecked' | 'handleChange'>;

export type FormInitStateType = {
  price: number;
  basic: number;
  senior: number;
  total: number;
  name: string;
  phone: string;
  email: string;
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
    };

export type InputFieldProps = {
  children: ReactNode;
  className: string;
  type: string;
  name: string;
  placeholder: string;
};
