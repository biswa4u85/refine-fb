import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
  Icons,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";
import "@pankod/refine-antd/dist/reset.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { ColorModeContextProvider } from "@contexts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";
import { authProvider } from "src/authProvider";
import { dataProvider } from "src/dataProvider";

import { UserList, UserShow } from "../src/pages/users";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <RefineKbarProvider>
      <Refine
        routerProvider={routerProvider}
        authProvider={authProvider}
        dataProvider={dataProvider}
        notificationProvider={notificationProvider}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        Title={Title}
        Header={Header}
        Sider={Sider}
        Footer={Footer}
        Layout={Layout}
        OffLayoutArea={OffLayoutArea}
        resources={[
          {
            name: "users",
            list: UserList,
            show: UserShow,
            icon: <Icons.UsergroupAddOutlined />,
          },
          { name: "forgotPassword" },
        ]}
      // i18nProvider={i18nProvider}
      >
        <Component {...pageProps} />
      </Refine>
    </RefineKbarProvider>
  );
}

export default MyApp
