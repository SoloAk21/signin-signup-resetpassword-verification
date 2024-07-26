import React, { useState } from "react";
import {
  CiShoppingCart,
  CiHeart,
  CiSearch,
  CiLight,
  CiDark,
} from "react-icons/ci";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "../context/ThemeProvider";
// Update the import path if necessary

export default function Header() {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 left-0 w-full z-50 bg-[var(--bg-color)] text-[var(--text-color)] shadow-lg">
        <div className="relative">
          {/* For md screen size */}
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex"
            } bg-[var(--bg-color)] text-[var(--text-color)] lg:hidden py-5 px-6 items-center justify-between`}
          >
            <div className="flex items-center space-x-3">
              <CiSearch className="text-xl" />
              <input
                type="text"
                placeholder="Search for influencers"
                className="text-sm leading-none text-[var(--text-color)] bg-[var(--bg-color)] focus:outline-none"
              />
            </div>
            <div className="space-x-6">
              <button
                aria-label="view favourites"
                className="text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
              >
                <CiHeart className="text-xl" />
              </button>
              <button
                aria-label="go to cart"
                className="text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
              >
                <CiShoppingCart className="text-xl" />
              </button>
            </div>
          </div>

          {/* For large screens */}
          <div className="bg-[var(--bg-color)] text-[var(--text-color)] px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
              <h1
                className="md:w-2/12 text-2xl font-bold cursor-pointer"
                aria-label="InfluencerHub."
              >
                <span>Influencer</span>
                <span className="text-[var(--primary)]">Hub</span>
              </h1>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] hover:underline"
                  >
                    Feature
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] hover:underline"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base focus:outline-none focus:ring-2 focus:ring-[var(--text-color)] hover:underline"
                  >
                    Support
                  </a>
                </li>
              </ul>
              <div className="md:w-2/12 flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={() => setSearchInput(!searchInput)}
                    aria-label="search influencers"
                    className="text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    <CiSearch className="text-xl" />
                  </button>
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    className={`${
                      searchInput ? "hidden" : ""
                    } text-sm bg-[var(--bg-color)] text-[var(--text-color)] rounded ml-1 border border-transparent focus:outline-none focus:border-[var(--text-color)] px-1`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="view favourites"
                    className="text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    <CiHeart className="text-2xl" />
                  </button>
                  {/* <button
                    aria-label="go to cart"
                    className="text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    <CiShoppingCart className="text-2xl" />
                  </button> */}
                  <button
                    aria-label="toggle theme"
                    onClick={toggleTheme}
                    className="text-[var(--text-color)] "
                  >
                    {isDarkMode ? (
                      <CiLight className="text-xl" />
                    ) : (
                      <CiDark className="text-xl" />
                    )}
                  </button>
                </div>
                <div className="flex gap-2 lg:hidden">
                  <button
                    aria-label="toggle theme"
                    onClick={toggleTheme}
                    className="text-[var(--text-color)] "
                  >
                    {isDarkMode ? (
                      <CiLight className="text-xl" />
                    ) : (
                      <CiDark className="text-xl" />
                    )}
                  </button>
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-[var(--text-color)] hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-[var(--text-color)]"
                  >
                    <RiMenu3Fill className="text-2xl" />
                  </button>

                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-[var(--text-color)] md:hidden focus:outline-none focus:ring-2 rounded focus:ring-[var(--text-color)]"
                  >
                    <RiMenu3Fill className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For small screens */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute bg-[var(--bg-color)] z-10 inset-0 md:hidden flex-col h-screen w-full`}
          >
            <div className="flex text-[var(--text-color)] items-center justify-between border-b border-[var(--border)] pb-4 p-4">
              <div className="flex items-center space-x-3">
                <CiSearch className="text-2xl" />
                <input
                  type="text"
                  placeholder="Search for influencers"
                  className="text-sm bg-[var(--bg-color)] text-[var(--text-color)] placeholder-[var(--text-color)] focus:outline-none"
                />
              </div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="text-[var(--text-color)] focus:outline-none focus:ring-2 rounded focus:ring-[var(--text-color)]"
              >
                <RxCross2 />
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-[var(--text-color)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-[var(--text-color)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-[var(--text-color)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-full flex items-end">
              <ul className="flex flex-col space-y-8 bg-[var(--bg-color)] py-4 px-6 w-full">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-[var(--text-color)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    Campaigns
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-[var(--text-color)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    Collaborations
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="text-base text-[var(--text-color)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--text-color)]"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
