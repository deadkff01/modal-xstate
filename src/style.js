import "sanitize.css";
import React from "react";
import css from "@emotion/css/macro";
import { Global } from "@emotion/core";

const globalStyles = css`
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .App {
    padding: 20px;
  }

  body.fontLoaded {
    font-family: sans-serif;
  }
`;

export default () => <Global styles={globalStyles} />;
