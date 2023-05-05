import { StateClassCommon } from "@store/types";
import { $SERVER_ERRORS } from "@utils/constants/errors";
import { makeAutoObservable } from "mobx";

export class SpecialScreens implements StateClassCommon {
  lastScreen: $SERVER_ERRORS | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  showSpecialScreen(screen: $SERVER_ERRORS): void {
    if (this.lastScreen !== screen) {
      this.lastScreen = screen;
    }
  }

  reset(): void {
    this.lastScreen = null;
  }
}

export const $specialScreensStore = new SpecialScreens();
