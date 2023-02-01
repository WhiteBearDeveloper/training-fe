import { getAuthToken } from "@services/auth";
import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";
import { $profileStore } from "@store/profile";

export class User implements StateClassCommon {
  isAuth: boolean | null = null;
  email: string | null = null;

  constructor() {
    makeAutoObservable(this);

    if (getAuthToken() !== null) {
      this.activateAuthorizationStatus();
      this.getProfile();
    } else {
      this.deactivateAuthorizationStatus();
    }
  }

  private getProfile(): void {
    $profileStore.update().catch((err) => console.error(err));
  }

  activateAuthorizationStatus(): void {
    this.isAuth = true;
  }

  deactivateAuthorizationStatus(): void {
    this.isAuth = false;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  reset(): void {
    this.isAuth = null;
    this.email = null;
  }
}

export const $userStore = new User();
