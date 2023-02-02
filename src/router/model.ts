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
    route: "/training-course/add",
    component: TrainingCourseAddScreen,
  },
  {
    route: "/training-course/:id",
    component: TrainingCourseDetailScreen,
  },
];
