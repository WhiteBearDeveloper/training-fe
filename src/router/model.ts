import { RouteItem } from "@router/types";
import {
  MainScreen,
  TrainingCourseAddScreen,
  TrainingCourseDetailScreen,
} from "@screens";

export const routes: RouteItem[] = [
  {
    route: "/",
    component: MainScreen,
  },
  {
    route: "/training-courses/add",
    component: TrainingCourseAddScreen,
    guards: ["isAuth"],
  },
  {
    route: "/training-courses/:id",
    component: TrainingCourseDetailScreen,
  },
];
