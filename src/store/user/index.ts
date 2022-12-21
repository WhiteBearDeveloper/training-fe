import { getAuthToken } from '@services/auth'
import { StateClassCommon } from '@store/types'
import { makeAutoObservable } from 'mobx'

export class User implements StateClassCommon {
  isAuth: boolean | null = null

  constructor () {
    makeAutoObservable(this)

    getAuthToken()
      ? this.activateAuthorizationStatus()
      : this.deactivateAuthorizationStatus()
  }

  activateAuthorizationStatus () {
    this.isAuth = true
  }

  deactivateAuthorizationStatus () {
    this.isAuth = false
  }

  reset () {
    this.isAuth = null
  }
}

export const $userStore = new User()
