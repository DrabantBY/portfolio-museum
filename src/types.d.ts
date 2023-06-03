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
  handleClick: (name: string, value: number, step: 1 | -1) => void;
} & Omit<FormFieldRadioProps, 'initValue' | 'isChecked' | 'handleChange'>;

export type FormInitStateType = {
  price: number;
  basic: number;
  senior: number;
  total: number;
};
