import "./input.scss";

const Input = (props) => {
    const { id, type, label, value, required, onChange } = props;

    // Determine which placeholder to display
    const getPlaceholder = () => {
        if (type === "email") {
            return "youremail@gmail.com";
        } else if (type === "password") {
            return "******";
        } else if (type === "text" && id === "pseudo") {
            return "Captain Nemo";
        } else {
            return "";
        }
    };

    return (
        <div className="input__wrapper">
            <label className="input__label" htmlFor={id}>
                {label || "Input label"}
            </label>

            <input
                id={id}
                name={id}
                className="input__input"
                value={value || ""}
                required={required}
                onChange={onChange}
                placeholder={getPlaceholder()}
                type={type || "text"}
            />
        </div>
    );
};

export default Input;
