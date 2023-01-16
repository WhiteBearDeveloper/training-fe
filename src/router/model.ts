import { RouteItem } from "@router/types";
import {
  MainScreen,
  TrainingCourseScreen,
  TrainingCourseAddScreen,
} from "@screens";

export const routes: RouteItem[] = [
  {
    route: "/",
    component: MainScreen,
  },
  {
    route: "/training-course",
    component: TrainingCourseScreen,
    children: [
      {
        route: "/add",
        component: TrainingCourseAddScreen,
      },
    ],
  },
];
