import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./model";
import { DefaultPublicTemplate } from "@templates";
import { Template } from "./types";
import { NotFoundScreen } from "@screens";

export const RoutesList = (): JSX.Element => {
  const getTemplate = (
    Children: React.FC,
    template?: Template,
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
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};
