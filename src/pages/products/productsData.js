import a7x_1 from "./metalProd/Avenged_Sevenfold/a7x_1.webp";
import a7x_2 from "./metalProd/Avenged_Sevenfold/a7x_2.webp";
import a7x_3 from "./metalProd/Avenged_Sevenfold/a7x_3.jpg";
import a7x_4 from "./metalProd/Avenged_Sevenfold/a7x_4.webp";
import a7x_5 from "./metalProd/Avenged_Sevenfold/a7x_5.webp";

import god_1 from "./metalProd/Godsmack/god_1.jpg"
import god_2 from "./metalProd/Godsmack/god_2.jpg"
import god_3 from "./metalProd/Godsmack/god_3.jpg"
import god_4 from "./metalProd/Godsmack/god_4.webp"
import god_5 from "./metalProd/Godsmack/god_5.jpg"

const allProducts = {
  metal: {
    a7x: {
      title: "Avenged Sevenfold",
      products: [
        { src: a7x_1, name: "A7X Shirt 1" },
        { src: a7x_2, name: "A7X Shirt 2" },
        { src: a7x_3, name: "A7X Shirt 3" },
        { src: a7x_4, name: "A7X Shirt 4" },
        { src: a7x_5, name: "A7X Shirt 5" },
      ],
    },
    godsmack: {
        title: "Godsmack",
        products: [
            { src: god_1, name: "Godsmack Shirt 1"},
            { src: god_2, name: "Godsmack Shirt 2"},
            { src: god_3, name: "Godsmack Shirt 3"},
            { src: god_4, name: "Godsmack Shirt 4"},
            { src: god_5, name: "Godsmack Shirt 5"},
        ],
    }
  },
  /*anime: {
    naruto: {
      title: "Naruto",
      products: [
        { src: naruto1, name: "Naruto Shirt 1", description: "Believe it!" },
        // други продукти...
      ],
    },
  },
*/};

export default allProducts;
