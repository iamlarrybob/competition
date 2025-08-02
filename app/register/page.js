'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

// 'use client';
function RegisterPage(){
  const [teamId, setTeamId] = useState('');

  useEffect(() => {
    // Generate a unique team ID (you can make it fancier if you want)
    const id = 'Team-' + Date.now();
    setTeamId(id);
  }, []);
  return (
 <main className="flex flex-col items-center justify-center min-h-screen bg-[url('/BR.jpg')] bg-cover bg-center p-4 rounded-2xl">
      <form
          action="https://formspree.io/f/xkgzvjoy"
          method="POST"
        className="flex flex-col gap-4 bg-white bg-opacity-60 p-6 rounded-xl w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center">Squad Registration</h2>

        {/* Team Number (Auto) */}
        <input type="hidden" name="Team Number" value={teamId} />

        {/* User-entered fields */}
        <input
          type="text"
          name="Player 1"
          placeholder="Player 1 Username"
          required
          className="bg-amber-100 px-4 py-2 rounded-md"
        />
        <input
          type="text"
          name="Player 2"
          placeholder="Player 2 Username"
          required
          className="bg-amber-100 px-4 py-2 rounded-md"
        />
        <input
          type="text"
          name="Player 3"
          placeholder="Player 3 Username"
          required
          className="bg-amber-100 px-4 py-2 rounded-md"
        />
        <input
          type="text"
          name="Player 4"
          placeholder="Player 4 Username"
          required
          className="bg-amber-100 px-4 py-2 rounded-md"
        />


        {/* Submit */}
        <button
          type="submit"
          className="mt-4 font-bold transform active:scale-90 p-2 bg-amber-400 hover:bg-blue-300 w-full rounded-3xl"
          onClick={() => {
            alert(`Your team ID is: ${teamId}`);
          }}
        >
          Submit Team
        </button>
      </form>
      <Link className="text-black p-3 mt-4 font-bold rounded-2xl active:scale-90 bg-gradient-to-r from-yellow-400 via-emerald-300 to-red-500 hover:underline" href="/">HomePage</Link>
    </main>

    
  );
}

export default RegisterPage;

