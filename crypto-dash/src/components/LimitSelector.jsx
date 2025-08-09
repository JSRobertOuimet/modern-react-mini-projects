const LimitSelector = ({limit, onChange}) => {
    return (
        <div className="controls">
            <label htmlFor="limit">Show: </label>
            <select
                id="limit"
                value={limit}
                onChange={e => onChange(Number(e.target.value))}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
    );
}
 
export default LimitSelector;