import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./model";
import { DefaultPublicTemplate } from "@templates/";
import { RouteItem, Template } from "./types";
import { NotFoundScreen } from "@screens";
import { checkGuards } from "./helpers";

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

const createRoutesList = (routes: RouteItem[], path?: string): JSX.Element => {
  return (
    <>
      {routes.map((item) => {
        const Component: React.FC = item.guards?.length
          ? checkGuards(item)
          : item.component;
        return (
          <React.Fragment key={`${path ?? ""}${item.route}`}>
            {item.children && createRoutesList(item.children, `${item.route}`)}
            <Route
              key={item.route}
              path={`${path ?? ""}${item.route}/`}
              element={getTemplate(Component, item.template)}
            ></Route>
          </React.Fragment>
        );
      })}
    </>
  );
};

export const RoutesList = (): JSX.Element => {
  return (
    <Routes>
      {createRoutesList(routes)}
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};
