import { Helmet, HelmetProvider } from "react-helmet-async";

const pageTitleList = {
  home: "WCB Cafe",
  news: "WCB Cafe - NEWS",
  menu: "WCB Cafe - MENU",
  contact: "WCB Cafe - CONTACT",
  notfound: "404 Not Found",
};

const pageTitle = (pagePath: string): string => {
  if (pagePath === "/") {
    return pageTitleList.home;
  } else if (pagePath === "/news") {
    return pageTitleList.news;
  } else if (pagePath === "/menu") {
    return pageTitleList.menu;
  } else if (pagePath === "/contact") {
    return pageTitleList.contact;
  } else {
    return pageTitleList.notfound;
  }
};

export const Meta = (props: { pagePath: string }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ブレンドコーヒーとヘルシーなオーガニックフードを提供するカフェ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="http://example.com/index.html" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="おしゃれなカフェで癒されてみませんか？無添加の食材で体の中からリフレッシュ．"
        />
        <meta property="og:image" content="http://example.com/images/ogp.jpg" />
        <title>{pageTitle(props.pagePath)}</title>
      </Helmet>
    </HelmetProvider>
  );
};
