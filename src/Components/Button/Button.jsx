import "./button.scss";

const Button = (props) => {
    const { onClick, text, type, color, disabled, icon } = props;

    let content;
    if (icon) {
        content = <img src={icon} alt="icon" />
    }

    return (
        <button
            type={type || "button"}
            disabled={disabled}
            className="button"
            onClick={onClick}
            style={{ [`--btn-bg`]: color }}
        >
            {content} {text}
        </button>
    );
};

export default Button;
