"use client";
import { Fragment, useState } from "react";
import { GetFetch } from "../api/GetFetch";
export default function BlockQuotes({ getSaved, myArsip }) {
  const [save, setSave] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getRandomQuotes() {
    let randomNumber = Math.floor(Math.random() * 10);
    try {
      setLoading(true);
      const response = await GetFetch(randomNumber);
      setSave(response[Math.floor(Math.random() * response.length - 1)]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function getSave() {
    const ArsipMultiple = myArsip.find((value) => value.id === save.id);
    if (!ArsipMultiple) getSaved(save);
    else alert("Quotes sudah ter-arsip");
  }

  return (
    <Fragment>
      <article className=" max-w-xl h-[250px] shadow-lg rounded-md mx-auto bg-slate-200 max-sm:h-72">
        <header className="w-full text-center ">
          <h1 className="text-2xl font-semibold font-sans  ">Text Random</h1>
        </header>
        <article className="w-3/4 h-[60%] shadow-lg mx-auto flex items-center bg-slate-50 justify-center rounded-md mt-2">
          {save?.length !== 0 && !loading ? (
            <blockquote className="text-center px-3 text-lg font-semibold max-sm:text-sm max-sm:font-normal text-slate-600">
              "{save?.body}"
            </blockquote>
          ) : save && loading ? (
            <div className="animate-spin h-5 w-5 ring-slate-500  ring-2"></div>
          ) : (
            <p className="text-center px-3 text-lg font-semibold max-sm:text-sm max-sm:font-normal text-slate-500">
              Click to Random Button
            </p>
          )}
        </article>
        <div className="w-full h-[25%]  flex justify-evenly items-center">
          <button
            type="button"
            className=" px-3 py-1 shadow-lg text-slate-800 bg-sky-400 font-semibold text-lg rounded-md  hover:bg-sky-500 hover:text-slate-100"
            onClick={getRandomQuotes}
          >
            Random
          </button>
          <button
            type="button"
            className=" px-5 py-1 shadow-lg text-slate-800 bg-slate-400 font-semibold text-lg rounded-md  hover:bg-slate-500 hover:text-slate-100 disabled:cursor-default disabled:bg-slate-400 disabled:text-slate-500"
            disabled={!save || save.length === 0}
            onClick={getSave}
          >
            Save
          </button>
        </div>
      </article>
    </Fragment>
  );
}
