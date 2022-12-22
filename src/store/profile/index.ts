import { getAuthToken } from "@services/auth";
import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";
import { ProfileInterface } from "./types";

export class Profile implements StateClassCommon {
  profile: ProfileInterface | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  reset() {
    this.profile = null;
  }
}

export const $profileStore = new Profile();
