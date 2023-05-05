import React from "react";

export interface RouteItem {
  route: string;
  component: React.FC;
  text?: string;
  template?: Template;
  children?: RouteItem[];
  guards?: Guards[];
}

export type Template = "defaultPublic";

export type Guards = "isAuth";
