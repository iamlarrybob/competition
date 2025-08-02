import Image from "next/image";
import { LuSlack } from "react-icons/lu";
import Link from "next/link";


export default function Home() {
  
  return (
    <div className="bg-gradient-to-r from-gray-900 via-pink-300 to-red-600 p-2 rounded-2xl">
  <main className="flex flex-col min-h-screen w-full items-center px-4 py-12 sm:px-6 md:px-12 lg:px-24 rounded-2xl bg-gradient-to-r from-amber-300 via-blue-900 to-blue-300">

    {/* Header Section */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 w-full text-center sm:text-left">
      
      {/* Icon Box */}
      <div className="flex flex-col items-center border-2 border-white shadow-[0_0_15px_#67b7d5] bg-gradient-to-r from-blue-800 via-amber-500 to-gray-700 p-4 rounded-2xl w-32 sm:w-40 md:w-48">
        <LuSlack size={40} className="text-red-700 mb-2" />
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">C.O.D.M</p>
      </div>

      {/* Title */}
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">The OG&apos;s Present</p>
    </div>

    {/* Main Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold leading-tight bg-gradient-to-r from-black via-gray-700 to-amber-400 bg-clip-text text-transparent mb-12 px-2">
      Battle Royal Competition
    </h1>

    {/* Image */}
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <Image
        src="/BR.jpg"
        alt="Battle Royal Poster"
        width={400}
        height={400}
        className="w-full h-auto shadow-[0_0_15px_#FFD230,0_0_45px_#FFD230] rounded-2xl"
      />
    </div>

    {/* Date Sections */}
    <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center sm:items-start w-full max-w-xl">
      <div className="flex flex-col items-center gap-2 text-center bg-black bg-opacity-30 p-4 rounded-2xl w-full sm:w-1/2">
        <p className="text-xl font-bold text-white">REGISTRATION</p>
        <p className="text-white">1ST - 15TH August</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-center bg-black bg-opacity-30 p-4 rounded-2xl w-full sm:w-1/2">
        <p className="text-xl font-bold text-white">MAIN EVENT</p>
        <p className="text-white">16TH - 17TH August</p>
      </div>
    </div>

    <button className="mt-12  px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300">
      <Link className="active:underline" href="/register">Register Now</Link>
    </button>

  </main>
</div>
  );
}
