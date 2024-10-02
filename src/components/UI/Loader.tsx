const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-4 border-dashed border-blue-500 rounded-full h-24 w-24 animate-spin"></div>
      <span className="ml-4 text-lg">Loading...</span>
    </div>
  );
};

export default Loader;
