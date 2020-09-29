export enum ChairStatus{
  occupied = 1,
  free = 2
}

export default class Chair {
  id: string;
  status: ChairStatus;
  chairNumber: number;
}
