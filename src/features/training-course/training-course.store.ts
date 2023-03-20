import { StateClassCommon } from "@store/types";
import { makeAutoObservable, runInAction } from "mobx";
import { $profileStore } from "@store/profile";
import { getTrainingCourseService } from "@api/services/training-courses";
import { TrainingCourseModel } from "@appTypes/training-course";

export class TrainingCourse implements StateClassCommon {
  trainingCourse: TrainingCourseModel[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get myTrainingCourse(): TrainingCourseModel[] | null {
    const { profile } = $profileStore;
    return profile && this.trainingCourse?.length
      ? this.trainingCourse.filter((item) => item.control?.isEditable)
      : null;
  }

  update = async (): Promise<any> => {
    const response: TrainingCourseModel[] | undefined =
      await getTrainingCourseService().then((data) => {
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
