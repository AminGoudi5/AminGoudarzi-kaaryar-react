import { type } from '@testing-library/user-event/dist/type';
import './style.css';

function Button({ as:As="button",variant,look,size, disabled,href, type,target,children,className,onClick,}){
 return(
    <As className={`button ${look} ${variant} ${size}  ${className}`}href={href} target={target} type={type} onClick={onClick} disabled={disabled}>{children}</As>
 )
}

const LOOKS={
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO: 'info',
    DARK: 'dark'
}
const VARIANTS = {
    FILLED: 'filled',
    OUTLINED: 'outLined'
}

const SIZE = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}



Button.LOOKS = LOOKS;
Button.VARIANTS = VARIANTS;
Button.SIZE = SIZE;



export default Button;