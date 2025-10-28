const Header = () => {
  return (
    <div className="bg-black/30 fixed w-full top-0 left-0 z-50 backdrop-blur-md shadow-md">
      <div className="text-2xl font-bold py-6 px-8">
        <span className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent hover:text-white transition-colors duration-500">
          {"{ ; }"} JSON Tree Visualizer
        </span>
      </div>
    </div>
  );
};
export default Header;
