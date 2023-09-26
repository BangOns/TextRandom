"use client";
import { DataQoutes } from "@/data";
import BlockQuotes from "./BlockQuotes";
import React, { useState } from "react";
import ArsipQuotes from "./ArsipQuotes";
export default function ContainerQuotes() {
  const [quotes, setQuotes] = useState(DataQoutes);
  const [quotesSave, setQuotesSave] = useState([]);
  let Data = DataQoutes;
  async function getSave(data) {
    setQuotes((old) => [...old, data]);
    Data.push(data);
    setQuotesSave([...Data]);
  }
  async function getDelete(id) {
    const FilteredData = quotes.filter((value) => value.id !== id);
    Data = [...FilteredData];
    setQuotes([...FilteredData]);
    setQuotesSave([...FilteredData]);
  }
  async function getWords(words) {
    const FilterWithWords = quotes.filter((value) =>
      value.body.toLowerCase().includes(words.toLowerCase())
    );
    if (words.length > 0) setQuotes([...FilterWithWords]);
    else if (quotesSave.length !== 0) setQuotes(quotesSave);
    else setQuotes(DataQoutes);
  }
  async function getUpdate(update) {
    let numbers = quotes.findIndex((value) => value.id === update.id);
    quotes[numbers].body = update.body;
    setQuotes([...quotes]);
    setQuotesSave([...quotes]);
  }
  return (
    <section className="container px-5  pt-10 mb-5">
      <BlockQuotes getSaved={getSave} myArsip={quotes} />
      <ArsipQuotes
        quotes={quotes}
        getDelete={getDelete}
        getWords={getWords}
        getTextBody={getUpdate}
      />
    </section>
  );
}
