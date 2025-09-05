interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  unit: "Piece";
}

interface Category {
  id: number;
  name: string;
  image: string;
  items: Item[];
}

const categoriesAR: Category[] = [
  {
    id: 1,
    name: "Fiction Books",
    image: "/images/shop/fiction-books.jpg",
    items: [
      {
        id: 1,
        name: "Mystery of the Old House",
        image: "/images/shop/fiction-books.jpg",
        price: 350,
        unit: "Piece",
      },
      {
        id: 2,
        name: "Romantic Dreams",
        image: "/images/shop/fiction-books.jpg",
        price: 400,
        unit: "Piece",
      },
      {
        id: 3,
        name: "Dreams",
        image: "/images/shop/fiction-books.jpg",
        price: 400,
        unit: "Piece",
      },

      {
        id: 4,
        name: "Romantic ",
        image: "/images/shop/fiction-books.jpg",
        price: 400,
        unit: "Piece",
      },
    ],
  },
  {
    id: 2,
    name: "Non-Fiction Books",
    image: "/images/shop/nonfiction-books.jpg",
    items: [
      {
        id: 5,
        name: "History of South Asia",
        image: "/images/shop/nonfiction-books.jpg",
        price: 500,
        unit: "Piece",
      },
      {
        id: 6,
        name: "Business Startup Guide",
        image: "/images/shop/nonfiction-books.jpg",
        price: 550,
        unit: "Piece",
      },
      {
        id: 7,
        name: "Business Startup",
        image: "/images/shop/nonfiction-books.jpg",
        price: 550,
        unit: "Piece",
      },
      {
        id: 8,
        name: "Startup Guide",
        image: "/images/shop/nonfiction-books.jpg",
        price: 550,
        unit: "Piece",
      },
    ],
  },
  {
    id: 3,
    name: "Children's Books",
    image: "/images/shop/children-books.jpg",
    items: [
      {
        id: 9,
        name: "Fairy Tales Collection",
        image: "/images/shop/children-books.jpg",
        price: 250,
        unit: "Piece",
      },
      {
        id: 10,
        name: "Math Made Fun",
        image: "/images/shop/children-books.jpg",
        price: 300,
        unit: "Piece",
      },
      {
        id: 11,
        name: "Math",
        image: "/images/shop/children-books.jpg",
        price: 300,
        unit: "Piece",
      },
      {
        id: 12,
        name: "Made Fun",
        image: "/images/shop/children-books.jpg",
        price: 300,
        unit: "Piece",
      },
      {
        id: 13,
        name: "Math Fun",
        image: "/images/shop/children-books.jpg",
        price: 300,
        unit: "Piece",
      },
    ],
  },
  {
    id: 4,
    name: "T-Shirts",
    image: "/images/shop/tshirts.jpg",
    items: [
      {
        id: 14,
        name: "Classic White Tee",
        image: "/images/shop/tshirts.jpg",
        price: 600,
        unit: "Piece",
      },
      {
        id: 15,
        name: "Graphic Black Tee",
        image: "/images/shop/tshirts.jpg",
        price: 750,
        unit: "Piece",
      },
      {
        id: 16,
        name: "Striped Casual Tee",
        image: "/images/shop/tshirts.jpg",
        price: 700,
        unit: "Piece",
      },
    ],
  },
  {
    id: 5,
    name: "Polo Shirts",
    image: "/images/shop/polo-shirts.jpg",
    items: [
      {
        id: 17,
        name: "Navy Blue Polo",
        image: "/images/shop/polo-shirts.jpg",
        price: 850,
        unit: "Piece",
      },
      {
        id: 18,
        name: "Red Polo Shirt",
        image: "/images/shop/polo-shirts.jpg",
        price: 900,
        unit: "Piece",
      },
      {
        id: 19,
        name: "Light Blue Office",
        image: "/images/shop/polo-shirts.jpg",
        price: 900,
        unit: "Piece",
      },
    ],
  },
  {
    id: 6,
    name: "Formal Shirts",
    image: "/images/shop/formal-shirts.jpg",
    items: [
      {
        id: 20,
        name: "White Formal Shirt",
        image: "/images/shop/formal-shirts.jpg",
        price: 1200,
        unit: "Piece",
      },
      {
        id: 21,
        name: "Light Blue Office Shirt",
        image: "/images/shop/formal-shirts.jpg",
        price: 1300,
        unit: "Piece",
      },
      {
        id: 22,
        name: "Blue Office Shirt",
        image: "/images/shop/formal-shirts.jpg",
        price: 1300,
        unit: "Piece",
      },
    ],
  },
];

export default categoriesAR;
