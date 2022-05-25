var catalog = [
    {
        _id: "1",
        price: 12.32,
        stock: 13,
        title: "Popularity",
        image: "popularity.jpg",
        discount: 5,
        category: "Delusion",
      },
      {
        _id: "2",
        price: 22.71,
        stock: 21,
        title: "Wisdom/Intelligence",
        image: "intelligence.jpg",
        discount: 10,
        category: "Genetics + Learned + Chemicals",
      },
      {
        _id: "3",
        price: 32.0,
        stock: 20,
        title: "Purpose",
        image: "compass.jpg",
        discount: 0,
        category: "Meaning of Life",
      },
      {
        _id: "4",
        price: 22.71,
        stock: 21,
        title: "Physical Attractiveness",
        image: "confidence.jpg",
        discount: 10,
        category: "Genetics + Learned + Chemicals",
      },
      {
        _id: "5",
        price: 22.71,
        stock: 21,
        title: "The Ability to Treat Others the Way that They Would Like to be Treated",
        image: "confidence.jpg",
        discount: 10,
        category: "Genetics + Learned + Chemicals",
      },
      {
        _id: "6",
        price: 22.71,
        stock: 21,
        title: "Confidence",
        image: "confidence.jpeg",
        discount: 10,
        category: "Delusion",
      },
      {
        _id: "7",
        price: 22.71,
        stock: 21,
        title: "Zen-Style Enlightenment",
        image: "yinyang.jpg",
        discount: 10,
        category: "Genetics + Learned + Chemicals",
      },
      {
        _id: "8",
        price: 22.71,
        stock: 21,
        title: "Happiness",
        image: "yinyang.jpg",
        discount: 10,
        category: "Meaning of LIfe",
      },
      {
        _id: "9",
        price: 22.71,
        stock: 21,
        title: "Financial Security",
        image: "yinyang.jpeg",
        discount: 10,
        category: "Genetics + Learned + Chemicals",
      },
      {
        _id: "10",
        price: 22.71,
        stock: 21,
        title: "Immortality",
        image: "intelligence.jpg",
        discount: 10,
        category: "Technology",
      },
    ]

    class DataService{
      getCatalog(){
        //retrieve data from the actual server

        return catalog;
      }
    }

    export default DataService;