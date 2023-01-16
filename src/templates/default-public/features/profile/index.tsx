import { Auth } from "@features/auth";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";

export const Profile = observer((): JSX.Element => {
  const [isAuthModalOpen, setAuthModalStatus] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setAuthModalStatus((prev) => !prev)}>Войти</button>
      {isAuthModalOpen && <Auth closeModal={() => setAuthModalStatus(false)} />}
    </>
  );
});
