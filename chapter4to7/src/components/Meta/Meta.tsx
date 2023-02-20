import { Helmet, HelmetProvider } from "react-helmet-async";

export const Meta = (props: { pagePath: string }) => {
  let pageTitle: string;

  if (props.pagePath === "/") {
    pageTitle = "Web Cafe";
  } else if (props.pagePath === "/news") {
    pageTitle = "Web Cafe - NEWS";
  } else {
    pageTitle = "見つかりませんでした - Web Cafe";
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
