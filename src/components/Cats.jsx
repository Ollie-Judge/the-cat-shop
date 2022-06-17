import { faker } from '@faker-js/faker'

const Cats = [
  {
    id: 1,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(),
    amount: 1,
  },
  {
    id: 2,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(2),
    amount: 1,
  },
  {
    id: 3,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(3),
    amount: 1,
  },
  {
    id: 4,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(4),
    amount: 1,
  },
  {
    id: 5,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(5),
    amount: 1,
  },
  {
    id: 6,
    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(6),
    amount: 1,
  },
  {
    id: 7,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(7),
    amount: 1,
  },
  {
    id: 8,
    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(8),
    amount: 1,
  },
  {
    id: 9,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(9),
       amount: 1,
  },
  {
    id: 10,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(10),
    amount: 1,
  },
  {
    id: 11,

    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(11),
    amount: 1,
  },
  {
    id: 12,
    name: faker.name.firstName(),
    breed: faker.animal.cat(),
    price: faker.commerce.price(80, 300, 0, ""),
    img: faker.image.cats(12),
    amount: 1,
  },
];

export default Cats;
