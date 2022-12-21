import { WithIntegerId } from 'types/common'

type NotificationType = 'error' | 'success'
export interface Notification {
  text: string
  type: NotificationType
  withTimeout?: boolean
}

export type NotificationTimeouts = Record<number, NodeJS.Timeout>

export interface NotificationStore extends WithIntegerId, Notification {}
