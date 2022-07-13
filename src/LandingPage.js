import React from "react";

function LandingPage() {
  return (
    <div>
      <h1 className="absolute top-[50%] left-[50%] text-2xl lg:text-5xl md:text-4xl sm:text-3xl">
        We solve Online Casino problem, and we've chosen you as one of the
        Pro-Gamers to test it out
      </h1>
      <div className="translate flex absolute top-[70%] left-[50%]">
        <button
          type="button"
          class="lg:mr-3 md:mr-3 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3  dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Launch VIP Bets
        </button>
        <button
          type="button"
          class=" text-white border-2 border-blue-700 hover:border-blue-800  font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:border-blue-600 dark:hover:border-blue-700"
        >
          Read Docs
        </button>
      </div>
      {/* <div>
        <a href="tradenow.html" class="btn contained">
          Launch VIP Bets
        </a>
        <a href="getstarted.html" class="btn outlined">
          Read Docs
        </a>
      </div> */}
    </div>
  );
}

export default LandingPage;
