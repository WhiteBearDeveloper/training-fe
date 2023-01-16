export interface WithIntegerId {
  id: number;
}
export interface WithIntegerProfileId {
  profileId: number;
}

export interface CommonWithIntegerAndProfileId
  extends WithIntegerId,
    WithIntegerProfileId {
  name: string;
}
