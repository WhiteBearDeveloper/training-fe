export interface ControllerHookInterface<T> {
  data: T | null;
  error: string;
  loaded: boolean;
}
