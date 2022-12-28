import { Auth } from "@features/auth";
import React, { useState } from "react";

export const MainScreen = (): JSX.Element => {
  const [isAuthModalOpen, setAuthModalStatus] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setAuthModalStatus((prev) => !prev)}>Войти</button>
      {isAuthModalOpen && <Auth closeModal={() => setAuthModalStatus(false)} />}
    </>
  );
};
