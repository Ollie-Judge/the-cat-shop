import {useEffect, useState} from "react";
import { faker } from "@faker-js/faker";

const name = faker.name.firstName();
const breed = faker.animal.cat();

const Cats = [
  {
    id: 1,
    name: `${name}`,
    breed: `${breed}`,
    price: 89,
    img: "https://cdn2.thecatapi.com/images/f5.jpg",
    amount: 1,
  },
  {
    id: 2,
    name: `${name}`,
    breed: `${breed}`,
    price: 98,
    img: "https://cdn2.thecatapi.com/images/fZS8WqaYm.jpg",
    amount: 1,
  },
  {
    id: 3,
    name: `${name}`,
    breed: `${breed}`,
    price: 143,
    img: "https://cdn2.thecatapi.com/images/anf.jpg",
    amount: 1,
  },
  {
    id: 4,
    name: `${name}`,
    breed: `${breed}`,
    price: 57,
    img: "https://cdn2.thecatapi.com/images/MjA3OTE1MA.jpg",
    amount: 1,
  },
  {
    id: 5,
    name: `${name}`,
    breed: `${breed}`,
    price: 149,
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
    price: 693,
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
    price: 80,
    img: "https://cdn2.thecatapi.com/images/RHs33lRPC.jpg",
    amount: 1,
  },
  {
    id: 10,
    name: `${name}`,
    breed: `${breed}`,
    price: 86,
    img: "https://cdn2.thecatapi.com/images/vKcrwdUwo.jpg",
    amount: 1,
  },
  {
    id: 11,
    name: `${name}`,
    breed: `${breed}`,
    price: 120,
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