const Error = ({error}) => {
    return (
      <div className="text-center">
        <h1 className="text-xl font-medium text-red">{error}</h1>
      </div>
    );
}
 
export default Error;