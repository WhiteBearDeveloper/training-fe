import { getUsers } from "@api/endpoints/auth";
import { useAxios } from "@utilities/hooks";

export const MainScreen = () => {
  // const { data } = useAxios(getUsers(), "get");
  return (
    <>
      <form>
        <input type="text" name="email" placeholder="Введите емейл" />
        <input type="text" name="password" placeholder="Введите пароль" />
        <button type="submit">Войти</button>
      </form>

      <form>
        <input type="text" name="email" placeholder="Введите емейл" />
        <input type="text" name="password" placeholder="Введите пароль" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};
