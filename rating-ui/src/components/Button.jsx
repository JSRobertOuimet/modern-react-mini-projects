const Button = ({ className, disabled, onClick, children }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
