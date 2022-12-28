import { getAuthToken } from "@services/auth";
import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";

export class User implements StateClassCommon {
  isAuth: boolean | null = null;

  constructor() {
    makeAutoObservable(this);

    getAuthToken()
      ? this.activateAuthorizationStatus()
      : this.deactivateAuthorizationStatus();
  }

  activateAuthorizationStatus(): void {
    this.isAuth = true;
  }

  deactivateAuthorizationStatus(): void {
    this.isAuth = false;
  }

  reset(): void {
    this.isAuth = null;
  }
}

export const $userStore = new User();
