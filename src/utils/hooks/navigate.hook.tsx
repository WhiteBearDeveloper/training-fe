import { NavigateFunction, useNavigate } from "react-router-dom";

export const useGoBackHook = (): (() => void) => {
  const navigate: NavigateFunction = useNavigate();
  const goBackHandler: () => void = (): void => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };
  return goBackHandler;
};
