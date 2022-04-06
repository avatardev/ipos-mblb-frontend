const NotFound = () => {
    return (
      <div
        className="
                flex
                items-center
                justify-center
                w-screen
                h-screen
                bg-gray
                from-indigo-600
                to-blue-400
            "
      >
        <div className="px-[32px] py-[32px] bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-xl">
              <span className="text-red">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-grey900 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <a
              href="/"
              className="px-6 py-2 text-sm font-medium text-white bg-button"
            >
              Back to home
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default NotFound;