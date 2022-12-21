import { registeredStates } from './model'

export const resetRegisteredStates = () => {
  registeredStates.forEach((item) => item.reset())
}
