import "./style.css";

const Buttons = ({ type, label, className, onChange, onClick }) => (
    <button
        type={type}
        className={className}
        onChange={onChange}
        onClick={onClick}
    >
        {label}
    </button>
);

export default Buttons;