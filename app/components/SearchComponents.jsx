import React from "react";

export default function SearchComponents({ getWords }) {
  return (
    <article className="w-full flex justify-between max-sm:items-center ">
      <form className="max-w-xl max-[400px]:w-1/2 ">
        <input
          type="text"
          className=" block w-full px-2 py-1 border-none outline-none rounded-md shadow-lg font-medium max-sm:font-normal focus:outline-slate-400 max-sm:w-full max-[380px]:text-sm max-sm:py-0.5  max-sm:px-1.5"
          placeholder="search Text"
          max={50}
          onChange={(e) => getWords(e.target.value)}
        />
      </form>
      <h1 className="font-semibold text-2xl max-sm:text-base max-[390px]:text-sm">
        Arsip Your'e Text
      </h1>
    </article>
  );
}
