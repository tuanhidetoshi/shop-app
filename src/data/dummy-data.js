import ShopItem from "../models/ShopItem";
import CartItem from "../models/CartItems";

export default {
  cart: [
    new CartItem(1, "Mat kieng 3D", 50000, 1),
    new CartItem(2, "Mat kieng chong nang", 150000, 3),
    new CartItem(3, "Mat kieng ram", 100000, 1),
    new CartItem(4, "Mat kieng thoi trang", 75000, 2),
  ],
  shop: [
    new ShopItem(
      1,
      "Mắt kiếng thể thao HULISLEM Blade",
      "https://images-na.ssl-images-amazon.com/images/I/51yKap1I6CL._AC_SX385._SX._UX._SY._UY_.jpg",
      200000,
      ["sport", "fashion", "men", "women"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      2,
      "Mắt kiếng nữ WOOLIKE Fashion",
      "https://images-na.ssl-images-amazon.com/images/I/613NaTv1ZBL._AC_UX679_.jpg",
      40000,
      ["fashion", "men"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      3,
      "Mắt kiếng thể thao HULISLEM Blade",
      "http://nudegirlsalert.com/wp-content/uploads/2017/11/femjoy_alisa_stripeysocks_001.jpg",
      20000,
      ["sport", "fashion", "men"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      4,
      "Mắt kiếng thể thao HULISLEM Blade",
      "http://nudegirlsalert.com/wp-content/uploads/2017/10/hegre_art_alisa-04.jpg",
      20000,
      ["sport", "fashion", "men"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      5,
      "Mắt kiếng thể thao HULISLEM Blade",
      "http://nudegirlsalert.com/wp-content/uploads/2017/05/rebecca_kelly_beautiful_encounters_0127.jpg",
      20000,
      ["sport", "fashion", "men"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      6,
      "Mắt kiếng thể thao HULISLEM Blade",
      "http://nudegirlsalert.com/wp-content/uploads/2017/05/maria-d_10.jpg",
      20000,
      ["sport", "fashion", "men"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      7,
      "Mắt kiếng thể thao HULISLEM Blade",
      "http://nudegirlsalert.com/wp-content/uploads/2017/05/susann_04.jpg",
      20000,
      ["sport", "fashion", "men"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      8,
      "Mắt kiếng thể thao HULISLEM Blade",
      "https://www.girlsofdesire.org/media/pictures_new/2015/2015-09-18-ball/03.jpg",
      20000,
      ["sport", "fashion", "men"],
      21,
      "20/12/2015"
    ),
    new ShopItem(
      9,
      "Mắt kiếng thể thao HULISLEM Blade",
      "http://nudegirlsalert.com/wp-content/uploads/2017/10/watch4beauty-milla_04.jpg",
      20000,
      ["sport", "fashion", "men"],
      21,
      "20/12/2015"
    ),
  ],
};
