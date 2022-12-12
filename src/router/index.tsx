import { Route, Routes } from "react-router-dom";
import { GlobalStore } from "@store/global";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { routes } from "./model";
import { DefaultPublicTemplate } from "./templates";
import { Template } from "./types";

export const RoutesList = observer(() => {
  const { $userStore } = useContext(GlobalStore);
  const isAuth = $userStore.isAuth;

  const getTemplate = (
    Children: React.FC,
    template?: Template
  ): React.ReactNode => {
    switch (template) {
      default:
        return (
          <DefaultPublicTemplate>
            <Children />
          </DefaultPublicTemplate>
        );
    }
  };

  return (
    <Routes>
      {routes.map((item) => (
        <Route
          key={item.route}
          path={`/${item.route}/`}
          element={getTemplate(item.component, item.template)}
        ></Route>
      ))}
    </Routes>
  );
});
