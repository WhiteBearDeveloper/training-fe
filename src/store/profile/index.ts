import { StateClassCommon } from "@store/types";
import { makeAutoObservable, runInAction } from "mobx";
import { ProfileModel } from "@whitebeardeveloper/training-logic/src/profile/types";
import { getProfileService } from "@api/services/profile";

export class Profile implements StateClassCommon {
  profile: ProfileModel | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async update(id?: number): Promise<any> {
    const response: ProfileModel | undefined = await getProfileService(id);
    if (response) {
      runInAction(() => {
        this.profile = response;
      });
    }
  }

  reset(): void {
    this.profile = null;
  }
}

export const $profileStore = new Profile();
