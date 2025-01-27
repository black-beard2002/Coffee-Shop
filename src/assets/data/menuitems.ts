import menu1 from "../image/menu1.png";
import menu2 from "../image/menu2.png";
import menu3 from "../image/menu3.png";
import menu4 from "../image/menu4.png";
import menu5 from "../image/menu5.png";
import menu6 from "../image/menu6.png";

const items = [
  {
    id: 1,
    name: "Affogato",
    image: menu1,
    price: 12,
    description: "Espresso served over ice cream.",
    detailedDescription:
      "A luxurious dessert beverage where a shot of rich, bold espresso is poured over a scoop of creamy vanilla ice cream, blending hot and cold flavors perfectly.",
  },
  {
    id: 2,
    name: "Espresso",
    price: 22,
    image: menu2,
    description: "Strong and bold coffee shot.",
    detailedDescription:
      "A small but powerful coffee brewed by forcing hot water through finely-ground coffee beans, resulting in an intense and aromatic shot of pure coffee flavor.",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 35,
    description: "Espresso with steamed milk and foam.",
    image: menu3,
    detailedDescription:
      "A classic Italian coffee drink made with equal parts of espresso, steamed milk, and velvety milk foam, topped with a sprinkle of cocoa or cinnamon for a delightful treat.",
  },
  {
    id: 4,
    name: "Latte",
    price: 45,
    description: "Espresso with lots of steamed milk.",
    image: menu4,
    detailedDescription:
      "A smooth and creamy coffee drink made with a shot of espresso and generously topped with steamed milk, offering a rich and mild flavor perfect for coffee lovers.",
  },
  {
    id: 5,
    name: "Flat White",
    price: 55,
    description: "Smooth espresso with velvety milk.",
    image: menu5,
    detailedDescription:
      "A velvety and well-balanced coffee made with a double shot of espresso and steamed milk, with less foam than a latte for a stronger coffee flavor.",
  },
  {
    id: 6,
    name: "Americano",
    price: 52,
    description: "Espresso diluted with hot water.",
    image: menu6,
    detailedDescription:
      "A simple and refreshing coffee made by diluting a shot of espresso with hot water, creating a light, smooth beverage similar to drip coffee but with a unique espresso taste.",
  },
  {
    id: 7,
    name: "Macchiato",
    price: 62,
    image: menu1,
    description: "Espresso with a dollop of foam.",
    detailedDescription:
      "A bold coffee drink featuring a shot of espresso 'stained' or 'marked' with a small amount of foamed milk, offering a stronger and more robust coffee experience.",
  },
  {
    id: 8,
    name: "Mocha",
    image: menu2,
    description: "Chocolate-infused espresso with milk.",
    price: 75,
    detailedDescription:
      "A delightful fusion of coffee and chocolate, made with espresso, steamed milk, and chocolate syrup or powder, often topped with whipped cream for added indulgence.",
  },
  {
    id: 9,
    name: "Breve",
    price: 85,
    description: "Espresso with steamed half-and-half.",
    image: menu3,
    detailedDescription:
      "A rich and creamy coffee drink made with espresso and steamed half-and-half instead of regular milk, giving it a smooth and luxurious texture.",
  },
  {
    id: 10,
    name: "Cortado",
    price: 95,
    image: menu4,
    description: "Espresso cut with a small amount of milk.",
    detailedDescription:
      "A Spanish-style coffee drink made with an equal ratio of espresso to steamed milk, cutting the espresso's intensity while preserving its rich flavor.",
  },
];

export default items;
