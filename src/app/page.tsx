import WhoAreWe from "@/components/home/whoAreWe";

const Home = () => {
  return (
    <div>
      {/* Hello World */}
      <WhoAreWe />

      <div className="mx-auto mt-10 max-w-4xl font-serif">
        <div className="mb-4 flex items-baseline gap-3">
          <div className="h-7 border-l-5 border-orange-300"></div>
          <h1 className="text-3xl">Why join us?</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Home;
