import { ProfileModel } from "@whitebeardeveloper/training-logic/dist/profile/types";
import { commonApiService } from "../common";
import { getMyProfileEndpoint } from "@api/endpoints/profile";

type Props = number | undefined;

export const getProfileService = async (
  id?: Props,
): Promise<ProfileModel | undefined> => {
  try {
    const response = await commonApiService<ProfileModel, Props>({
      url: getMyProfileEndpoint(),
      method: "GET",
    });
    return response.data;
  } catch (e) {
    console.error("Ошибка получения профиля");
  }
};
