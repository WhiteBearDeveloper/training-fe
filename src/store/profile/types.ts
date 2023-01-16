import { WithIntegerId } from "@appTypes/common";

export enum SexEnum {
  "male" = 1,
  "female" = 2,
}

export interface ProfileInterface extends WithIntegerId {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  sex: SexEnum;
  createdAt: string;
  updatedAt: string;
}
