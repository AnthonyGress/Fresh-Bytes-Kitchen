const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Craft Cocktails" },
    { name: "Draft Beer" },
    { name: "Wine" },
    { name: "Appetizers" },
    { name: "Small Bites" },
    { name: "Chef Special" },
    { name: "Entrees" },
    { name: "Desserts" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Old Fashion",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "old-fashioned.jpg",
      category: categories[0]._id,
      price: 12.99,
    },
    {
      name: "Manhattan",
      description:
        "Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.",
      image: "manhattan.jpg",
      category: categories[0]._id,
      price: 10.99,
    },
    {
      name: "Cosmopolitan",
      category: categories[0]._id,
      description:
        "Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.",
      image: "cosmopolitan.jpg",
      price: 10.99,
    },
    {
      name: "Moscow Mule",
      category: categories[0]._id,
      description:
        "Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
      image: "moscow-mule.png",
      price: 10.99,
    },
    {
      name: "Strawberry Gin Sour",
      category: categories[0]._id,
      description:
        "Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
      image: "gin-sour.jpg",
      price: 12.99,
    },
    {
      name: "Orange Blossom Pilsner (Orange Blossom Brewing Co.)",
      category: categories[1]._id,
      description:
        "Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
      image: "orange-blossom.jpg",
      price: 8.99,
    },
    {
      name: "McSwaggers Own (Crookerd Can Brewing Co.)",
      category: categories[1]._id,
      description:
        "In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
      image: "mcswaggers.jpg",
      price: 7.99,
    },
    {
      name: "Dunedein Beer Flight",
      category: categories[1]._id,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
      image: "dunedin.jpg",
      price: 18.99,
    },
    {
      name: "Florida Cracker (Cigar City Brewing Co.)",
      category: categories[1]._id,
      description:
        "Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
      image: "cigar-city.jpg",
      price: 7.99,
    },
    {
      name: "Tropic Pressure (Big Storm Brewing Co.)",
      category: categories[1]._id,
      description:
        "Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
      image: "tropic-pressure.jpg",
      price: 7.99,
    },
    {
      name: "Cabernet Sauvignon",
      category: categories[2]._id,
      description:
        "Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
      image: "cabernet.jpg",
      price: 13.99,
    },
    {
      name: "Merlot",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "merlot.jpg",
      price: 12.99,
    },
    {
      name: "Pinot Noir",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "pinot.jpg",
      price: 12.99,
    },
    {
      name: "Sauvignon Blanc",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "sauvignon.jpg",
      price: 11.99,
    },
    {
      name: "Reisling",
      category: categories[2]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "reisling.jpg",
      price: 11.99,
    },
    {
      name: "Korean Double Crunch Wings",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "korean-wings.jpg",
      price: 11.99,
    },
    {
      name: " Chili Garlic Edamame",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "edamame.jpg",
      price: 8.99,
    },
    {
      name: "Avacodo Eggrolls",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "avocado-eggrolls.jpg",
      price: 13.99,
    },
    {
      name: "Truffle Fries",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "truffle.jpg",
      price: 14.99,
    },
    {
      name: "Fried Mozzarella",
      category: categories[3]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "fried-mozzarella.jpg",
      price: 10.99,
    },
    {
      name: "Caprese Bites",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "caprese.jpg",
      price: 12.99,
    },
    {
      name: "Steak and Burrata",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "steak-burrata.jpg",
      price: 27.99,
    },
    {
      name: "Lemon Ginger Chicken Skewers",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "lemon-chicken.jpg",
      price: 21.99,
    },
    {
      name: "Iberico Pork",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "pork.jpg",
      price: 16.99,
    },
    {
      name: "Flaming Cheese",
      category: categories[4]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "flaming-cheese.jpg",
      price: 9.99,
    },
    {
      name: "Lamb Chops",
      category: categories[5]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "lamb.jpg",
      price: 36.99,
    },
    {
      name: "Cajun Butter Lobster Tails",
      category: categories[5]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "lobster.jpg",
      price: 42.99,
    },
    {
      name: "Tuna and Yellow-Tail Poke",
      category: categories[5]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "tuna-poke.jpg",
      price: 29.99,
    },
    {
      name: "Prawn and Black Truffle Pasta",
      category: categories[5]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "shrimp-pasta.jpg",
      price: 30.99,
    },
    {
      name: "Parmasan Crusted Swordfish Steak",
      category: categories[5]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "swordfish.jpg",
      price: 32.99,
    },
    {
      name: "Filet Mignon",
      category: categories[6]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "filet-mignon.jpg",
      price: 45.99,
    },
    {
      name: "Cacio De Pepe",
      category: categories[6]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "cacio.jpg",
      price: 25.99,
    },
    {
      name: "Sesame Glazed Salmon",
      category: categories[6]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "salmon.jpg",
      price: 29.99,
    },
    {
      name: "Stuffed Lemon Garlic Chicken",
      category: categories[6]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "stuffed-chicken.jpg",
      price: 23.99,
    },
    {
      name: "Caesar Salad",
      category: categories[6]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "caesar-salad.jpg",
      price: 18.99,
    },
    {
      name: "Pumpkin Cheesecake",
      category: categories[7]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "cheesecake.jpg",
      price: 12.99,
    },
    {
      name: "Chocolate Cake",
      category: categories[7]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "chocolate-cake.jpg",
      price: 11.99,
    },
    {
      name: "Tirimisu",
      category: categories[7]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "tiramisu.jpg",
      price: 12.99,
    },
    {
      name: "Zeppole",
      category: categories[7]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "zeppole.jpg",
      price: 13.99,
    },
    {
      name: "Passion Fruit Mousse",
      category: categories[7]._id,
      description:
        "Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
      image: "passionfruit.jpg",
      price: 13.99,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
