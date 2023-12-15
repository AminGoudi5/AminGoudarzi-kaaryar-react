import './style.css';

function Button({ className, button_title }) {
    return (
        <button className={`button ${className}`}>{button_title}</button>
    )
}

export default Button