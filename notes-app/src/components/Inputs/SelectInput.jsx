const SelectInput = ({
    name,
    label,
    value,
    onChange,
    options,
    required = false,
}) => {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <select
                name={name}
                id={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={required}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
