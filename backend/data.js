import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('basirPassword'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('johnPassword'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: 1,
      name: 'Apples',
      slug: 'apples',
      image: '/images/apples.jpg',
      category: 'Fruit',
      price: 2.31,
      countInStock: 20,
      producer: 'fruGo',
      rating: 4.7,
      numReviews: 10,
      description: 'delicious and clean apples!',
    },
    {
      // _id: 2,
      name: 'Carrots',
      slug: 'carrots',
      category: 'Vegetable',
      image: '/images/carrots.jpg',
      price: 1.67,
      countInStock: 0,
      producer: 'fruGo',
      rating: 4.6,
      numReviews: 7,
      description: 'delicious and clean carrots!',
    },
    {
      // _id: 3,
      name: 'Cherries',
      slug: 'cherries',
      category: 'Fruit',
      image: '/images/cherries.jpg',
      price: 4.05,
      countInStock: 11,
      producer: 'fruGo',
      rating: 4.74,
      numReviews: 13,
      description: 'delicious and clean cherries!',
    },
  ],
};

export default data;
