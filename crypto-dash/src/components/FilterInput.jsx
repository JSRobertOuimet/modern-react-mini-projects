const FilterInput = ({ filter, onChange }) => {
    return (
        <div className="filter">
            <label htmlFor="search" style={{ position: "absolute", left: "-9999px" }}>
                Search
            </label>
            <input
                type="search"
                id="search"
                value={filter}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
};

export default FilterInput;
