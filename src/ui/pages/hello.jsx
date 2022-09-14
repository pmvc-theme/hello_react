import React from "react";
import get from "get-object-value";
import { Return } from "reshow";

const Hello = () => (
  <Return>
    {({data}) => (
      <>
        <div>hello {get(data, ["text"])}</div>
        <div>{get(data, ["laze_text"])}</div>
        <div><a href="/hello_app/ttfb">Test ttfb</a></div>
      </>
    )}
  </Return>
);

export default Hello;
