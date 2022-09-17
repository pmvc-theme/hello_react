import get from "get-object-value";
import { Return } from "reshow";

const Hello = () => (
  <Return initStates={["data", "lazyData"]}>
    {({data, lazyData}) => (
      <>
        <div>hello {get(data, ["text"])}</div>
        <div>{get(lazyData, ["laze_text"])}</div>
      </>
    )}
  </Return>
);

export default Hello;
