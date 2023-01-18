import { ProfileAnswer } from "@whitebeardeveloper/training-logic/src/profile/types";
import { commonApiService } from "../common";
import { getMyProfileEndpoint } from "@api/endpoints/profile";

type Props = number | undefined;

export const getProfileService = async (
  id?: Props,
): Promise<ProfileAnswer | undefined> => {
  try {
    const response = await commonApiService<ProfileAnswer, Props>({
      url: getMyProfileEndpoint(),
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка получения профиля");
  }
};
