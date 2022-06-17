import { faker } from "@faker-js/faker";

const name = faker.name.firstName();
const breed = faker.animal.cat();

const Cats = [
  {
    id: 1,
    name: `${name}`,
    breed: `${breed}`,
    price: 209,
    img: "https://cdn2.thecatapi.com/images/f5.jpg",
    amount: 1,
  },
  {
    id: 2,
    name: `${name}`,
    breed: `${breed}`,
    price: 349,
    img: "https://cdn2.thecatapi.com/images/fZS8WqaYm.jpg",
    amount: 1,
  },
  {
    id: 3,
    name: `${name}`,
    breed: `${breed}`,
    price: 269,
    img: "https://cdn2.thecatapi.com/images/anf.jpg",
    amount: 1,
  },
  {
    id: 4,
    name: `${name}`,
    breed: `${breed}`,
    price: 375,
    img: "https://cdn2.thecatapi.com/images/MjA3OTE1MA.jpg",
    amount: 1,
  },
  {
    id: 5,
    name: `${name}`,
    breed: `${breed}`,
    price: 285,
    img: "https://cdn2.thecatapi.com/images/5nr.jpg",
    amount: 1,
  },
  {
    id: 6,
    name: `${name}`,
    breed: `${breed}`,
    price: 135,
    img: "https://cdn2.thecatapi.com/images/al5.jpg",
    amount: 1,
  },
  {
    id: 7,
    name: `${name}`,
    breed: `${breed}`,
    price: 589,
    img: "https://cdn2.thecatapi.com/images/and.jpg",
    amount: 1,
  },
  {
    id: 8,
    name: `${name}`,
    breed: `${breed}`,
    price: 289,
    img: "https://cdn2.thecatapi.com/images/a6g.jpg",
    amount: 1,
  },
  {
    id: 9,
    name: `${name}`,
    breed: `${breed}`,
    price: 260,
    img: "https://cdn2.thecatapi.com/images/RHs33lRPC.jpg",
    amount: 1,
  },
  {
    id: 10,
    name: `${name}`,
    breed: `${breed}`,
    price: 377,
    img: "https://cdn2.thecatapi.com/images/vKcrwdUwo.jpg",
    amount: 1,
  },
  {
    id: 11,
    name: `${name}`,
    breed: `${breed}`,
    price: 299,
    img: "https://cdn2.thecatapi.com/images/kw9n_n4-X.jpg",
    amount: 1,
  },
  {
    id: 12,
    name: `${name}`,
    breed: `${breed}`,
    price: 157,
    img: "https://cdn2.thecatapi.com/images/xbP4iLqKT.jpg",
    amount: 1,
  },
];

export default Cats;
