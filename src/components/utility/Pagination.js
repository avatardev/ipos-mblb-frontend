import {MdNavigateNext, MdNavigateBefore} from "react-icons/md"
const Pagination = ({page, setPage, limit, totalData}) => {

    const totalPage = Math.ceil(totalData / limit);
    let elements = [];
    for(let i = 1; i <= totalPage; i++){
        elements.push(i);
    }

    const nextPage = () => {
        if (page === totalPage) {
            return false
        } else {
            setPage(current => current + 1)
        }
    }

    const previousPage = () => {
        if (page === 1) {
            return false
        } else {
            setPage(current => current - 1)
        }
    }

    return ( 
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Prev
        </button>
        <button
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
        {/* <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{limit}</span> of{' '}
            <span className="font-medium">{totalData}</span> results
          </p>
        </div> */}
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
                onClick={previousPage}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <MdNavigateBefore className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {/* <a
              href="#"
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a> */}
            {elements.map(item => (
                <button key={item}
                onClick={() => setPage(item)}
                aria-current="page"
                className={`z-10 ${page === item ? "bg-secondary" : "" } border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              >
                  {item}
              </button>
            ))}
            <button
                onClick={nextPage}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <MdNavigateNext className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
     );
}
 
export default Pagination;