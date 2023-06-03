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
  initValue: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
};

export type FormFieldNumberProps = {
  value: number;
} & Omit<FormFieldRadioProps, 'initValue' | 'isChecked'>;

export type FormInitStateType = {
  price: number;
  basic: number;
  senior: number;
  total: number;
};

export type ActionReducerType =
  | {
      type: string;
      price: number;
    }
  | {
      type: string;
      basic: number;
    }
  | {
      type: string;
      senior: number;
    };
