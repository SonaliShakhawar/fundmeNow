'use client';

import { faCommentDollar, faMugHot, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { parseFullName } from "parse-full-name";
import { useState } from "react";

export default function Header({ session }: { session: Session | null }) {
  const name = session?.user?.name || '';
  const { first: firstName } = parseFullName(name);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="flex justify-between max-w-5xl mx-auto px-4 py-4 items-center">
          {/* Logo */}
          <Link href="/" className="inline-flex gap-2 items-center text-lg font-bold">
            <FontAwesomeIcon className="text-yellow-400 h-6" icon={faCommentDollar} />
            <span>FundmeNow</span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-6 items-center">
            <Link href="/about" className="hover:text-yellow-400 mx-16">Investment</Link>
            <Link href="/campaign" className="hover:text-yellow-400 mx-13">Business</Link>
            
        

            {/* User Authentication */}
            <div className="flex gap-4">
              {session ? (
                <Link
                  href="/profile"
                  className="flex items-center gap-2 bg-yellow-300 rounded-full p-1 pr-4"
                >
                  <Image
                    src={session.user?.image as string}
                    alt="avatar"
                    width="36"
                    height="36"
                    className="rounded-full"
                  />
                  {firstName}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => signIn('google')}
                    className="border-2 border-yellow-400 text-yellow-400 rounded-full px-4 py-2"
                  >
                    Login
                  </button>
                  <button className="bg-yellow-400 text-white rounded-full px-4 py-2">
                    Sign up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
