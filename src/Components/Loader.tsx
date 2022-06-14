export const Loader = () => {
  return (
    <div className="loaderWrapper ">
      <div className="spinnerBox">
        <i
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full "
          role="status"
        ></i>
      </div>
    </div>
  );
};
