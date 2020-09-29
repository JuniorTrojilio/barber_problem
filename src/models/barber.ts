export enum BarberStatus {
  tpSleeping = 1,
  tpWorking = 2
}

export default class Barber{
  id: string;
  chair_id: string;
  name: string;
  status: BarberStatus;
  timeOfSleeping: number;
}

