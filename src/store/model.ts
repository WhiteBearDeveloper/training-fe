import { $userStore } from "@store/user";
import { $notificationsStore } from "./notifications";
import { $profileStore } from "./profile";
import { $trainingCourseStore } from "@features/training-course/training-course.store";
import { $loaderStore } from "./loader";
import { $specialScreensStore } from "./special-screens";

export const registeredStates = [
  $userStore,
  $notificationsStore,
  $profileStore,
  $trainingCourseStore,
  $loaderStore,
  $specialScreensStore,
];
