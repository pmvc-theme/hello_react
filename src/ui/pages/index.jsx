import { lazy, useEffect } from "react";
import Reshow, { ReshowMessage } from "reshow";
import { PopupPool } from "organism-react-popup";
import { PageLoadProgressHandler } from "organism-react-progress";

import getLanguage from "../../getLanguage";
import getConfig from "../../getConfig";

const themes = {
  Home: lazy(() => import("../pages/Home")),
  Register: lazy(() => import("../pages/Register")),
  Hello: lazy(() => import("../pages/Hello")),
};

const Index = (props) => {
  useEffect(()=>{
    getConfig(getLanguage());
  }, []);
  return (
    <>
      <Reshow themes={themes} {...props} immutable />
      <PopupPool />
      <PageLoadProgressHandler ajax zIndex={1000} />
      <ReshowMessage defaultAlertProps={{ position: "bottom" }} />
    </>
  );
};

export default Index;
