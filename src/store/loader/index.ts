import { StateClassCommon } from "@store/types";
import { makeAutoObservable } from "mobx";

export class Loader implements StateClassCommon {
  loader: boolean = false;
  activeUrls: Set<string> = new Set<string>();

  constructor() {
    makeAutoObservable(this);
  }

  addNewQuery(route: string): void {
    if (!this.activeUrls.has(route)) {
      this.loader = true;
      this.activeUrls.add(route);
    }
  }

  removeQuery(route: string): void {
    this.activeUrls.delete(route);
    if (!this.activeUrls.size) {
      this.loader = false;
    }
  }

  reset(): void {
    this.activeUrls.clear();
  }
}

export const $loaderStore = new Loader();
