const Limit = ({limit, setLimit, setPage, setKeyword}) => {
    return (
      <div className="md:flex md:justify-between py-3">
        <div className="flex gap-2">
          <p>Show</p>
          <select
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
              setPage(1);
            }}
            className="border-[1px] border-primary rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <p>Entries</p>
        </div>
        <div className="flex gap-2 py-3 sm:py-0">
          <p>Search: </p>
          <input
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
            className="border-[1px] py-1 px-2 rounded outline-none"
            type="search"
          />
        </div>
      </div>
    );
}
 
export default Limit;