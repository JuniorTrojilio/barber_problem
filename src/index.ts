import Barber from './models/barber';
import BarberShop from './models/barberShop';
import faker from 'faker';

import { v4 as uuidv4 } from 'uuid';

const barberShop = new BarberShop(4);
const barber = new Barber;

barber.id = uuidv4()
barber.name = faker.name.findName();


function createRandomTime(max: number) {
    return Math.round(Math.random() * max);
}

function meetClient() {
    const cliente = barberShop.deleteClient();


    if (!cliente) {
        const sleep = createRandomTime(6000);
        console.log(`Não há clientes. O(A) barbeiro(a) ${barber.name} vai dormir por ${sleep}.`);
        barber.timeOfSleeping = setTimeout(meetClient, sleep);
    } else {
        setTimeout(meetClient, cliente.ArrivalTime);
    }
}

function createClient() {
    const time = createRandomTime(8000);
    barberShop.addClient(time);

    if (barber.timeOfSleeping) {
        clearTimeout(barber.timeOfSleeping);
        setTimeout(() => {
          meetClient()
        })
    }

    setTimeout(createClient, createRandomTime(10000));
}

createClient();
meetClient();
