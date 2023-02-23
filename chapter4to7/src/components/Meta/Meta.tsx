import { Helmet, HelmetProvider } from "react-helmet-async";

export const Meta = (props: { pagePath: string }) => {
  let pageTitle: string;

  if (props.pagePath === "/") {
    pageTitle = "WCB Cafe";
  } else if (props.pagePath === "/news") {
    pageTitle = "WCB Cafe - NEWS";
  } else {
    pageTitle = "見つかりませんでした - WCB Cafe";
  }
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ブレンドコーヒーとヘルシーなオーガニックフードを提供するカフェ"
        />
        <title>{pageTitle}</title>
      </Helmet>
    </HelmetProvider>
  );
};
