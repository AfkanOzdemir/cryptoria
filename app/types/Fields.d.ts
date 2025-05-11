export interface InputProps {
    password: string;
    setPassword: (password: string) => void;
    extraClass?: string;
    placeholder?: string;
}

export interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export interface SliderProps {
    value: number;
    onChange: (value: number) => void;
}

export interface ButtonProps {
    label: string | React.ReactNode;
    onClick: () => void;
    extraClass?: string;
}



