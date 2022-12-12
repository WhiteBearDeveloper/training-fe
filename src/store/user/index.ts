import { getAuthToken } from "@services/auth";
import { makeAutoObservable } from "mobx";

export class User {
  isAuth: boolean | null = null;

  constructor() {
    makeAutoObservable(this);

    getAuthToken()
      ? this.activateAuthorizationStatus()
      : this.deactivateAuthorizationStatus();
  }

  activateAuthorizationStatus() {
    this.isAuth = true;
  }

  deactivateAuthorizationStatus() {
    this.isAuth = false;
  }
}

export const $userStore = new User();
