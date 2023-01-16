import { ProfileInterface } from "@whitebeardeveloper/training-logic/src/profile/types";
import { commonApiService } from "../common";
import { getMyProfileEndpoint } from "@api/endpoints/profile";

type Props = number | undefined;

export const getProfileService = async (
  id?: Props,
): Promise<ProfileInterface | undefined> => {
  try {
    const response = await commonApiService<ProfileInterface, Props>({
      url: getMyProfileEndpoint(),
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка получения профиля");
  }
};
