import { Method } from 'axios'

export interface ApiServiceType<T = any> {
  url: string
  method: Method
  payload?: T
}
