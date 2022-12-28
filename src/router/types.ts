import React from "react";

export interface RouteItem {
  route: string;
  component: React.FC;
  text?: string;
  template?: Template;
}

export type Template = "defaultPublic";
