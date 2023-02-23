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
        <title>{pageTitle(props.pagePath)}</title>
      </Helmet>
    </HelmetProvider>
  );
};
