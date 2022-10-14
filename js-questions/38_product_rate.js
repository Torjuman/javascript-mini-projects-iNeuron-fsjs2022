/**
 * 3. The products array has three elements and each of them has six properties.
 * - a. Create a function called rateProduct which rates the product
 * - b. Create a function called averageRating which calculate the average rating of a product
 */

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/**
 * a. Create a function called rateProduct which rates the product
 * @param {string} productId
 * @param {string} userId
 * @param {number} rate
 */
function rateProduct(productId, userId, rate) {
  let userObj = {
    userId: userId,
    rate: rate,
  };

  products.forEach((product) => {
    if (product._id == productId) {
      let productRated = false;
      let userIdIndex = 0;
      product.ratings.forEach((user, index) => {
        if (user.userId == userId) {
          productRated = true;
          userIdIndex = index;
        }
      });
      if (productRated) {
        product.ratings[userIdIndex].rate = rate;
        console.log(product.ratings);
      } else {
        product.ratings.push(userObj);
        console.log(product.ratings);
      }
    }
  });
}

/**
 * b. Create a function called averageRating which calculate the average rating of a product
 */
function averageRating() {
  products.forEach((product) => {
    let totalRate = 0;
    let numOfRate = product.ratings.length || 1;
    let avgRate = 0;
    product.ratings.forEach((item) => {
      totalRate += item.rate;
    });

    avgRate = totalRate / numOfRate;
    console.log(`${product.name} has avarage rate of ${avgRate}`);
  });
}

averageRating();

rateProduct("aegfal", "fg12cy", 5);
rateProduct("hedfcg", "fg12cy", 4);
rateProduct("hedfcg", "zwf8md", 5);

console.log(products);

averageRating();
