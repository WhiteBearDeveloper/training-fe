import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";

export class SpecialScreens implements StateClassCommon {
  lastScreen: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  showSpecialScreen(screen: string): void {
    if (this.lastScreen !== screen) {
      this.lastScreen = screen;
    }
  }

  reset(): void {
    this.lastScreen = "";
  }
}

export const $specialScreensStore = new SpecialScreens();
