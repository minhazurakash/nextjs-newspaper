import React, { useEffect, useState } from "react";
import logo from "../assests/Prothom-Alo-logo.jpg";
import {
  FaBars,
  FaClosedCaptioning,
  FaSearch,
  FaWindowClose,
} from "react-icons/fa";
import Link from "next/link";
import { data } from "autoprefixer";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const [nav, setNav] = useState([]);
  const [logo, setLogo] = useState("");
  const [hidden, setHidden] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < prevScrollPos ||
        currentScrollPos < 200
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    fetch("https://mpnews24bd.com/api/menu")
      .then((res) => res.json())
      .then((data) => setNav(data?.menu));

    fetch("https://mpnews24bd.com/api/website")
      .then((res) => res.json())
      .then((logo) => setLogo(logo.website.logo));

    router.events.on("routeChangeComplete", () => {
      setHidden(true);
    });
  }, []);
  return (
    <>
      <div
        style={{ top: visible ? "0" : "-113px" }}
        className="w-full transition-all shadow-xl mb-10 px-3 sm:px-0 fixed bg-white z-40"
      >
        <div className="container mx-auto h-28 flex justify-between items-center">
          <div className="w-1/3">
            <div className="block mb-3">
              <div className="block">
                <FaBars
                  onClick={() => setHidden(!hidden)}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>
            <h5 className="text-xs hidden md:block">
              মঙ্গলবার, ০৬ ডিসেম্বর ২০২২
            </h5>
          </div>

          <div className="w-1/3 flex justify-center items-center h-full">
            <Link href="/">
              <img className=" w-60" src={logo} alt="" />
            </Link>
          </div>
          <div className="w-1/3 text-right">
            {/* <Link href="/user/login">
            <button className="btn btn-sm rounded-none border bg-transparent text-blue-500">
              Login
            </button>
          </Link> */}
          </div>
        </div>
        <div
          className={`hidden md:relative md:bg-transparent py-3 border-t-2 md:flex flex-wrap gap-5 justify-center min-h-[50px] transition-all`}
        >
          <ul className="px-5 grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-5">
            {nav.map((item) => {
              return (
                <li key={item.key}>
                  <Link href={`/category/${item?.name}`} legacyBehavior>
                    <a className="hover:text-blue-500 font-bold">
                      {item?.name}
                    </a>
                  </Link>
                </li>
              );
            })}
            {/* <li>
            <Link href="/category/aksh" legacyBehavior>
              <a className="hover:text-blue-500">Life-style</a>
            </Link>
          </li>
          <li>
            <Link href="/category/aksh" legacyBehavior>
              <a className="hover:text-blue-500">Entertainment</a>
            </Link>
          </li>
          <li>
            <Link href="/category/aksh" legacyBehavior>
              <a className="hover:text-blue-500">World</a>
            </Link>
          </li>
          <li>
            <Link href="/category/aksh" legacyBehavior>
              <a className="hover:text-blue-500">Bangladesh</a>
            </Link>
          </li>
          <li>
            <Link href="/category/aksh" legacyBehavior>
              <a className="hover:text-blue-500">Sports</a>
            </Link>
          </li> */}
          </ul>
        </div>
      </div>
      <div className="">
        <div
          className={`${
            hidden
              ? "hidden"
              : "block  fixed bg-white top-0 left-0 overflow-scroll w-full md:w-[300px] h-screen z-50"
          } py-3 grid grid-cols-1 gap-5 justify-start  transition-all right-shadow`}
        >
          <div className="md:hidden flex justify-center shadow-md h-28">
            <div className="w-1/3 flex justify-center items-center h-full">
              <Link href="/">
                <img className=" w-60" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="block pl-5 py-3 absolute top-2 left-2">
            <FaWindowClose
              onClick={() => setHidden(!hidden)}
              className="text-xl cursor-pointer"
            />
          </div>
          <div className="w-full mt-0 md:mt-14">
            <ul className="px-5 grid grid-cols-2 text-center md:text-left md:grid-cols-1 gap-5">
              {nav.map((item) => {
                return (
                  <li className="" key={item.key}>
                    <Link href={`/category/${item?.name}`} legacyBehavior>
                      <a className="hover:text-blue-500 font-bold">
                        {item?.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
