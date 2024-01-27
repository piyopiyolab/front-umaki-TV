import "./button.scss";

const Button = (props) => {
    const { onClick, text, type, disabled, className } = props;

    return (
        <button
            type={type || "button"}
            disabled={disabled}
            className={className ? `button ${className}` : 'button'}

            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
