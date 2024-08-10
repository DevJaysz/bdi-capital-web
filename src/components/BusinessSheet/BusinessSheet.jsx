function BusinessSheet() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-customBG bg-cover bg-center p-8 text-gray-500 sm:text-lg dark:text-gray-400 ">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto font-centuryGothic z-10">
        <p className="mb-4 text-base sm:text-lg">
          At BDI Capital, we take care of all the questions that keep you up at
          night, all the questions you can’t answer, and all the tasks you’re
          still figuring out how to do.
        </p>
        <p className="mb-8 text-base sm:text-lg">
          We take care of your backend so you can focus on your frontend.
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          WELCOME TO YOUR BUSINESS SHEET
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-6 pt-4 w-full text-gray-900 dark:text-white ">
          <button className="border-white border-2 rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base  w-full md:w-auto hover:bg-white hover:text-black transition duration-300">
            I NEED HELP TO GET STARTED
          </button>
          <button className="border-white border-2 rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base  w-full md:w-auto hover:bg-white hover:text-black transition duration-300">
            I NEED HELP WITH OPERATIONS
          </button>
          <button className="border-white border-2 rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base  w-full md:w-auto ">
            I NEED HELP WITH MY EXIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessSheet;
