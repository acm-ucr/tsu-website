import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-tsu-beige-300 relative -z-10 flex h-screen w-full flex-col items-center justify-center gap-2 font-bold md:gap-4">
      <div className="bg-tsu-orange-100 absolute right-0 -bottom-1/8 z-0 size-2/5 rounded-full opacity-50 blur-3xl md:-top-1/8" />
      <div className="bg-tsu-yellow-100 absolute -top-1/8 left-0 z-0 size-2/5 rounded-full opacity-50 blur-3xl md:top-auto md:-bottom-1/8" />
      <p className="font-tsu-sora z-10 text-3xl md:text-8xl">4 0 4</p>
      <p className="font-tsu-sahitya z-10 w-1/2 text-center text-lg md:w-1/3 md:text-3xl">
        Sorry, the page you were looking for is not found!
      </p>
      <Link
        href={"/"}
        className="bg-tsu-orange-200 font-tsu-sahitya z-10 mt-4 w-1/2 rounded-full py-3 text-center text-lg text-white md:w-1/3 md:text-3xl"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
