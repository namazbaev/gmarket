import Tasty from 'assets/images/tasty.svg'
import Orange from 'assets/images/orange.svg'
import Tomato from 'assets/images/tomato.svg'
import Grocery from 'assets/images/grocery.svg'
import Jumbo from 'assets/images/jumbo.svg';
import Lemon from 'assets/images/lemon.svg';
import Zespri from 'assets/images/zespri.svg';
import Avocado from 'assets/images/avocado.svg';
import LargeAvocado from 'assets/images/large-avocado.svg';


export const card = [
  {
    color: "#ff6d04",
    textColor: "#FFE1CF",
    title: "Sale Orange",
    text: "Promocode down",
    brand: "orange20",
    brandTextColor: "#FF7F10",
    img: Orange,
    isVisit: true
  },
  {
    color: "#e34025",
    textColor: "#FFCBC2",
    title: "Tomato",
    text: "Buy at affodable prices",
    brand: "tomato",
    img: Tomato,
    isVisit: false
  },
  {
    color: "#A2BE00",
    textColor: "#F5FFBB",
    title: "Sale 40%",
    text: "Very tasty pasta",
    brand: "food40",
    brandTextColor: '#A2BE00',
    img: Tasty,
    isVisit: true
  },
  {
    color: "#2F8CF6",
    textColor: "#E4F9FF",
    title: "Collection",
    text: "Sale full pack",
    brand: "collect",
    brandTextColor: "#2F8CF6",
    img: Grocery,
    isVisit: true
  },
  // {
  //   color: '#7753F6',
  //   textColor: "#EFEBFF",
  //   title: "Sale 25%",
  //   text: "Very tasty pasta",
  //   brand: "test20",
  //   brandTextColor: "#7753F6",
  //   img: Grocery
  // },
];
export const products = [
  {
    id: 1,
    img: Avocado,
    price: 5.99,
    title: "Calavo Hass Avocados"
  },
  {
    id: 2,
    img: Lemon,
    price: 3.89,
    title: "Lemons (Large) 8"
  },
  {
    id: 3,
    img: Jumbo,
    price: 10.5,
    title: "Jumbo Cantaloupe"
  },
  {
    id: 4,
    img: Zespri,
    price: 4.90,
    title: "Zespri Kiwifruit 2 lb"
  },
  {
    id: 5,
    img: LargeAvocado,
    price: 7.91,
    title: "Hass Large Avocado"
  },
]
