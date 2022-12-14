import { StateClassCommon } from "@store/types";
import { makeAutoObservable, toJS } from "mobx";
import { Notification, NotificationStore, NotificationTimeouts } from "./types";

export class Notifications implements StateClassCommon {
  notifications: NotificationStore[] | null = null;
  private notificationsTimeoutsList: NotificationTimeouts | null = null;
  private readonly notificationTimeoutLimit: number = 5000;

  constructor() {
    makeAutoObservable(this);
  }

  addNotification({ withTimeout = true, ...notification }: Notification) {
    const id = this.notifications === null ? 1 : this.notifications.length + 1;
    const newNotification = { id, withTimeout, ...notification };

    withTimeout && this.addNotificationTimer(id);

    this.notifications === null
      ? (this.notifications = [newNotification])
      : this.notifications.push(newNotification);
  }

  closeNotification(id: number) {
    if (this.notifications) {
      this.notifications = this.notifications?.filter((item) => item.id !== id);
      this.removeNotificationTimer(id);
    }
  }

  addNotificationTimer(id: number) {
    const timer: NodeJS.Timeout = setTimeout(() => {
      this.closeNotification(id);
      this.removeNotificationTimer(id);
    }, this.notificationTimeoutLimit);
    this.notificationsTimeoutsList === null
      ? (this.notificationsTimeoutsList = { [id]: timer })
      : (this.notificationsTimeoutsList[id] = timer);
  }

  removeNotificationTimer(id: number) {
    if (this.notificationsTimeoutsList?.[id]) {
      delete this.notificationsTimeoutsList?.[id];
    }
  }

  reset() {
    this.notifications = null;
  }
}

export const $notificationsStore = new Notifications();
