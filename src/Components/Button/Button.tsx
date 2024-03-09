import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
    return (
        <button className={classNames(styles.button, styles[variant])} {...props}>
            {children}
        </button>
    );
};

export default Button;
