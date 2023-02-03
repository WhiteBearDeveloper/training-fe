import { StateClassCommon } from "@store/types";
import { makeAutoObservable, runInAction } from "mobx";
import { TrainingCourseModel } from "@whitebeardeveloper/training-logic/dist/training-course/types";
import { $profileStore } from "@store/profile";
import { getTrainingCourseService } from "@api/services/training-courses";

export class TrainingCourse implements StateClassCommon {
  isNotStarted: boolean = true;
  trainingCourse: TrainingCourseModel[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get myTrainingCourse(): TrainingCourseModel[] | null {
    const { profile } = $profileStore;
    return profile && this.trainingCourse?.length
      ? this.trainingCourse.filter((item) => item.profileId === profile?.id)
      : null;
  }

  update = async (): Promise<any> => {
    const response: TrainingCourseModel[] | undefined =
      await getTrainingCourseService().then((data) => {
        if (this.isNotStarted) {
          runInAction(() => {
            this.isNotStarted = false;
          });
        }
        return data;
      });
    if (response) {
      runInAction(() => {
        this.trainingCourse = response;
      });
    }
  };

  reset(): void {
    this.trainingCourse = null;
  }
}

export const $trainingCourseStore = new TrainingCourse();
