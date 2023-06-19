export type MenuBurgerType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MenuPropsType = {
  position: 'header' | 'footer';
  isBurger?: boolean;
} & Partial<Pick<MenuBurgerType, 'isActive' | 'setIsActive'>>;

export type FieldValueType = {
  value: string;
  error: boolean;
};

export type FieldLabelType = {
  value: string;
  label: string;
};

export type FieldInputPropsType = {
  label?: string;
  icons: JSX.Element[];
  className: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
};

export type FieldRadioPropsType = {
  isChecked: boolean;
} & Omit<FieldInputPropsType, 'type' | 'children' | 'placeholder' | 'icons'>;

export type FieldNumberPropsType = {
  handleClick: (name: string, value: number, step: 1 | -1) => void;
} & Omit<FieldRadioPropsType, 'handleChange'>;

export type FieldSelectPropsType = {
  options: FieldLabelType[];
} & Omit<FieldInputPropsType, 'type'>;

/*********************************************************************/

export type FormInitStateType = {
  price: string;
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
      price: string;
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
