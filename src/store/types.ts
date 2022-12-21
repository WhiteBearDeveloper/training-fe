import { User } from '@store/user'
import { Notifications } from '@store/notifications'

export interface State {
  $userStore: User
  $notificationsStore: Notifications
}

export interface StateClassCommon {
  reset: () => void
}
