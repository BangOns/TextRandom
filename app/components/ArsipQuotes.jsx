import React from "react";
import ListQuotes from "./ListQuotes";
import SearchComponents from "./SearchComponents";

export default function ArsipQuotes({
  quotes,
  getDelete,
  getWords,
  getTextBody,
}) {
  return (
    <article className="max-w-full h-auto  ">
      <section className="max-w-5xl mt-5 bg-slate-50 p-5 mx-auto rounded-lg">
        <SearchComponents getWords={getWords} />
        <hr className=" mt-2 py-0.5 rounded-lg bg-slate-800" />
        <article className="w-full flex flex-wrap justify-evenly gap-4 mt-4">
          {quotes.map((value, ind) => {
            return (
              <ListQuotes
                key={ind}
                {...value}
                HandleDelete={getDelete}
                getTextBody={getTextBody}
              />
            );
          })}
        </article>
      </section>
    </article>
  );
}
