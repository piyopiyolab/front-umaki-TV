import "./button.scss";

const Button = (props) => {
    const { onClick, text, type, color, disabled } = props;

    return (
        <button
            type={type || "button"}
            disabled={disabled}
            className="button"
            onClick={onClick}
            style={{ [`--btn-bg`]: color }}
        >
            {text}
        </button>
    );
};

export default Button;
