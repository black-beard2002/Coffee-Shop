import menu1 from "../image/menu1.png";
import menu2 from "../image/menu2.png";
import menu3 from "../image/menu3.png";
import menu4 from "../image/menu4.png";
import menu5 from "../image/menu5.png";
import pie1 from "../image/pie1.png";
import pie2 from "../image/pie2.png";
import pie3 from "../image/pie3.png";
import pie4 from "../image/pie4.png";
import pie5 from "../image/pie5.png";
import cr1 from "../image/cr1.png";
import cr2 from "../image/cr2.png";
import cr3 from "../image/cr3.png";
import cr4 from "../image/cr4.png";
import cr5 from "../image/cr5.png";
import cake1 from "../image/cake1.png";
import cake2 from "../image/cake2.png";
import cake3 from "../image/cake3.png";
import cake4 from "../image/cake4.png";
import cake5 from "../image/cake5.png";
import cold1 from "../image/cold1.png";
import cold2 from "../image/cold2.png";
import cold3 from "../image/cold3.png"
import cold4 from "../image/cold4.png"
import cold5 from "../image/cold5.png"

const items = [
  // Hot Drinks
  {
    id: 1,
    name: "Affogato",
    image: menu1,
    price: 12,
    category: "drinks",
    popular: true,
    description: "Espresso served over ice cream.",
    detailedDescription: "A luxurious dessert beverage where a shot of rich, bold espresso is poured over a scoop of creamy vanilla ice cream, blending hot and cold flavors perfectly.",
  },
  {
    id: 2,
    name: "Espresso",
    price: 22,
    image: menu2,
    category: "drinks",
    popular: true,
    description: "Strong and bold coffee shot.",
    detailedDescription: "A small but powerful coffee brewed by forcing hot water through finely-ground coffee beans, resulting in an intense and aromatic shot of pure coffee flavor.",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 35,
    category: "drinks",
    popular: true,
    description: "Espresso with steamed milk and foam.",
    image: menu3,
    detailedDescription: "A classic Italian coffee drink made with equal parts of espresso, steamed milk, and velvety milk foam, topped with a sprinkle of cocoa or cinnamon for a delightful treat.",
  },
  {
    id: 4,
    name: "Caramel Macchiato",
    price: 38,
    category: "drinks",
    popular: false,
    description: "Vanilla-flavored drink marked with espresso.",
    image: menu4,
    detailedDescription: "A sweet and creamy beverage featuring vanilla syrup, steamed milk, and espresso, topped with caramel drizzle.",
  },
  {
    id: 5,
    name: "Turkish Coffee",
    price: 28,
    category: "drinks",
    popular: false,
    description: "Finely ground coffee brewed in cezve.",
    image: menu5,
    detailedDescription: "Traditional Middle Eastern coffee prepared by brewing extremely fine coffee grounds with cardamom in a special pot called cezve.",
  },

  // Pies
  {
    id: 6,
    name: "Apple Pie",
    price: 42,
    category: "pies",
    popular: true,
    description: "Classic apple pie with cinnamon.",
    image: pie1,
    detailedDescription: "Fresh apples tossed with cinnamon and sugar, baked in a flaky, buttery crust until golden brown.",
  },
  {
    id: 7,
    name: "Cherry Pie",
    price: 45,
    category: "pies",
    popular: true,
    description: "Sweet-tart cherry filling.",
    image: pie3,
    detailedDescription: "Juicy cherries in a perfectly sweetened filling, encased in a homemade butter crust.",
  },
  {
    id: 8,
    name: "Lemon Meringue Pie",
    price: 48,
    category: "pies",
    popular: false,
    description: "Tangy lemon with fluffy meringue.",
    image: pie5,
    detailedDescription: "Zesty lemon curd topped with light, fluffy meringue peaks, baked until golden.",
  },
  {
    id: 9,
    name: "Pecan Pie",
    price: 52,
    category: "pies",
    popular: true,
    description: "Rich and nutty southern classic.",
    image: pie4,
    detailedDescription: "Classic southern pie with a rich filling of pecans, butter, and brown sugar in a flaky crust.",
  },
  {
    id: 10,
    name: "Pumpkin Pie",
    price: 44,
    category: "pies",
    popular: false,
    description: "Spiced pumpkin custard pie.",
    image: pie2,
    detailedDescription: "Smooth pumpkin custard seasoned with fall spices, baked in a tender crust.",
  },

  // Croissants
  {
    id: 11,
    name: "Classic Butter Croissant",
    price: 32,
    category: "croissants",
    popular: true,
    description: "Traditional French butter croissant.",
    image: cr3,
    detailedDescription: "Flaky, buttery layers of hand-rolled French pastry, baked to golden perfection.",
  },
  {
    id: 12,
    name: "Chocolate Croissant",
    price: 35,
    category: "croissants",
    popular: true,
    description: "Croissant with dark chocolate.",
    image: cr2,
    detailedDescription: "Buttery croissant filled with rich dark chocolate, creating a perfect balance of flavors.",
  },
  {
    id: 13,
    name: "Almond Croissant",
    price: 38,
    category: "croissants",
    popular: true,
    description: "Filled with almond cream.",
    image: cr4,
    detailedDescription: "Twice-baked croissant filled with almond cream and topped with sliced almonds.",
  },
  {
    id: 14,
    name: "Ham & Cheese Croissant",
    price: 42,
    category: "croissants",
    popular: false,
    description: "Savory croissant sandwich.",
    image: cr5,
    detailedDescription: "Flaky croissant filled with premium ham and melted Swiss cheese.",
  },
  {
    id: 15,
    name: "Raisin Croissant",
    price: 34,
    category: "croissants",
    popular: false,
    description: "Sweet croissant with raisins.",
    image: cr1,
    detailedDescription: "Buttery croissant studded with plump, sweet raisins throughout.",
  },

  // Cold Drinks
  {
    id: 16,
    name: "Iced Americano",
    price: 28,
    category: "coldDrinks",
    popular: true,
    description: "Chilled espresso with water.",
    image: cold3,
    detailedDescription: "Shots of espresso topped with cold water and ice for a refreshing coffee experience.",
  },
  {
    id: 17,
    name: "Frappuccino",
    price: 45,
    category: "coldDrinks",
    popular: true,
    description: "Blended coffee drink.",
    image: cold2,
    detailedDescription: "Blended coffee drink with ice and milk, topped with whipped cream.",
  },
  {
    id: 18,
    name: "Cold Brew",
    price: 35,
    category: "coldDrinks",
    popular: true,
    description: "Smooth, slow-steeped coffee.",
    image: cold5,
    detailedDescription: "Coffee brewed with cold water over 12-24 hours for a smooth, less acidic taste.",
  },
  {
    id: 19,
    name: "Iced Matcha Latte",
    price: 42,
    category: "coldDrinks",
    popular: false,
    description: "Green tea latte over ice.",
    image: cold1,
    detailedDescription: "Premium matcha green tea with cold milk and ice for a refreshing experience.",
  },
  {
    id: 20,
    name: "Iced Chai Latte",
    price: 38,
    category: "coldDrinks",
    popular: false,
    description: "Spiced tea latte with ice.",
    image: cold4,
    detailedDescription: "Spiced black tea blend with cold milk and ice, perfect for warm days.",
  },

  // Cakes
  {
    id: 21,
    name: "Chocolate Layer Cake",
    price: 58,
    category: "cakes",
    popular: true,
    description: "Rich chocolate layer cake.",
    image: cake5,
    detailedDescription: "Four layers of moist chocolate cake with dark chocolate ganache and chocolate buttercream.",
  },
  {
    id: 22,
    name: "Carrot Cake",
    price: 52,
    category: "cakes",
    popular: true,
    description: "Classic spiced carrot cake.",
    image: cake4,
    detailedDescription: "Moist carrot cake with walnuts, topped with cream cheese frosting.",
  },
  {
    id: 23,
    name: "Red Velvet Cake",
    price: 56,
    category: "cakes",
    popular: true,
    description: "Cocoa-flavored red cake.",
    image: cake2,
    detailedDescription: "Classic red velvet cake with cream cheese frosting and chocolate shavings.",
  },
  {
    id: 24,
    name: "Lemon Drizzle Cake",
    price: 48,
    category: "cakes",
    popular: false,
    description: "Light lemon-flavored cake.",
    image: cake1,
    detailedDescription: "Light and zesty lemon cake with lemon syrup and citrus glaze.",
  },
  {
    id: 25,
    name: "Tiramisu Cake",
    price: 62,
    category: "cakes",
    popular: true,
    description: "Coffee-flavored Italian dessert.",
    image: cake3,
    detailedDescription: "Italian dessert cake with layers of coffee-soaked ladyfingers and mascarpone cream.",
  },
];

export default items;
