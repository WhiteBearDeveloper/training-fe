import React from "react";

export interface RouteItem {
  route: string;
  component: React.FC;
  text?: string;
  template?: Template;
  children?: RouteItem[];
}

export type Template = "defaultPublic";
