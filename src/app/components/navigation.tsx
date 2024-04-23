const Navigation = () => {
  return (
    <nav className="flex w-full justify-between p-2">
      <h1 className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
        Marlone Akidiva
      </h1>
      <ul className="flex justify-around w-96 capitalize font-semibold ">
        <li className="border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
          blog
        </li>
        <li className="border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
          courses
        </li>
        <li className="border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
          discord
        </li>
        <li className="border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
          projects
        </li>
        <li className="border-b-4 border-opacity-0 hover:border-b-4 hover:border-b-black hover:cursor-pointer">
          about
        </li>
      </ul>
      <div className="">
        <button className="px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
