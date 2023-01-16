import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";
import { ProfileInterface } from "./types";
import { getProfileService } from "@api/services/profile";

export class Profile implements StateClassCommon {
  profile: ProfileInterface | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async update(id?: number): Promise<any> {
    const response: ProfileInterface | undefined = await getProfileService(id);
    if (response !== undefined) {
      this.profile = response;
    }
  }

  reset(): void {
    this.profile = null;
  }
}

export const $profileStore = new Profile();
