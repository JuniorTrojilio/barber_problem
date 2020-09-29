import Barber from '../models/barber';
import Chair  from '../models/chair';
import Client from '../models/client';

import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

export default class Barbershop {
  private chair = new Chair;
  private clients : Client[]

  constructor(configChair: number) {
      this.chair.chairNumber = configChair;
      this.clients = [];
  }

  addClient(time: number) {
      const id = uuidv4();

      const client = new Client;

      client.id = id;
      client.name = faker.name.findName();
      client.ArrivalTime = time;

      if (this.clients.length >= this.chair.chairNumber) {
          console.log(`Não há cadeiras disponíveis. O cliente ${client?.name} foi embora.`);
          return;
      }

      console.log(`O cliente #${client?.name} chegou com tempo de ${time} para atendimento.`);



      this.clients.push(client);
  }

  deleteClient() {
      if (this.clients.length < 1) {
          return false;
      }

      const cliente = this.clients.shift();
      console.log(`O cliente ${cliente?.name} está sendo atendido...`);
      return cliente;
  }
}
