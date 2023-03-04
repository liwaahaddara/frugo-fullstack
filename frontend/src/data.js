// import images here
import Apples from './images/apples.jpg';
import Carrots from './images/carrots.jpg';
import Cherries from './images/cherries.jpg';

const data = {
  products: [
    {
      _id: 1,
      name: 'Apples',
      slug: 'apples',
      category: 'Fruit',
      image: Apples,
      price: 2.31,
      countInStock: 20,
      producer: 'fruGo',
      rating: 4.7,
      numReviews: 10,
      description: 'delicious and clean apples!',
    },
    {
      _id: 2,
      name: 'Carrots',
      slug: 'carrots',
      category: 'Vegetable',
      image: Carrots,
      price: 1.67,
      countInStock: 16,
      producer: 'fruGo',
      rating: 4.6,
      numReviews: 7,
      description: 'delicious and clean carrots!',
    },
    {
      _id: 3,
      name: 'Cherries',
      slug: 'cherries',
      category: 'Fruit',
      image: Cherries,
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
