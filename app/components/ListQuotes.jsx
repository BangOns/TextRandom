"use client";
import React, { useState } from "react";

export default function ListQuotes({ body, id, HandleDelete, getTextBody }) {
  const [edit, setEdit] = useState(false);
  const [TextEdit2, setTextEdit2] = useState("");
  function handleEdit() {
    setEdit(!edit);
    setTextEdit2(body);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const Update = {
      id,
      body: TextEdit2,
    };
    getTextBody(Update);
    setEdit(false);
  }
  return (
    <div className="w-80  h-auto p-5 bg-slate-400 rounded-lg shadow-md ">
      {edit ? (
        <form onSubmit={handleSubmit}>
          <textarea
            className="rounded-md w-full resize-none outline-none px-2 text-sm"
            rows={10}
            value={TextEdit2}
            onChange={(e) => setTextEdit2(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full px-2 py-1 rounded-md bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 hover:text-slate-500"
          >
            submit
          </button>
        </form>
      ) : (
        <blockquote className="text-sm font-normal text-slate-900 tracking-wide">
          "{body}"
        </blockquote>
      )}

      <div className="w-full mt-2 flex gap-3">
        <button
          className="w-full px-2 py-1 rounded-md bg-red-600 text-slate-50 font-medium hover:bg-red-500 hover:text-slate-100 disabled:cursor-default  disabled:bg-red-400  disabled:text-slate-100  "
          disabled={edit}
          onClick={() => HandleDelete(id)}
        >
          Remove
        </button>
        <button
          className="w-full px-2 py-1 rounded-md bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 hover:text-slate-500"
          onClick={handleEdit}
        >
          {edit ? "NotYet" : "Edit"}
        </button>
      </div>
    </div>
  );
}
