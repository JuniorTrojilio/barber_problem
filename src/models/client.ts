export enum ClientStatus {
  tpWaitingStanding = 1,
  tpWaitingSitting = 2,
  tpCuttingHair = 3
}

export default class Client {
  id: string;
  name: string;
  ArrivalTime: number;
  state: ClientStatus;
}
