import { useEffect } from "react";
import { useRecoilState } from "recoil";
import Navbar from "../components/Navbar";
import { themeState } from "../lib/recoil/atoms";
import "./CountryDetails.css";

const CountryDetail = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-start bg-[#eeeeee] py-8 px-6 dark:bg-[#202c37] lg:px-12 xl:px-16 2xl:px-32">
        <button id="button" type="button"> click</button>
        <a href="https://earth.google.com/web/@0,-5.5833,0a,22251752.77375655d,35y,0h,0t,0r"> country location</a>
      </main>
    </>
  );
};

export default CountryDetail;
