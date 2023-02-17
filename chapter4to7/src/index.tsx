import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }
  body {
    font-family: "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "ビラギノ角ゴ Pro W3", sans-serif;
    line-height: 1.7;
    color: #432;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ブレンドコーヒーとヘルシーなオーガニックフードを提供するカフェ"
        />
        <title>Web Cafe</title>
      </Helmet>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
