import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from '../images/tour-img08.jpg'

const tours = [
  {
    id: "01",
    title: "Valley of flowers",
    city: "Uttarakhand",
    address: "National Park, Chamoli, Uttarakhand",
    distance: 300,
    price: 9999,
    maxGroupSize: 10,
    desc: "Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli in the state of Uttarakhand.",
    reviews: [
],
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Nubra Valley",
    city: "Ladakh",
    address: "Nubra Velley, Ladakh ",
    distance: 400,
    price: 9999,
    maxGroupSize: 8,
    desc: "Nubra Valley, between Kashmir and Tibet, boasts a barren yet stunning terrain with monasteries, rivers, camels, and sand dunes. It's a photographer's haven, home to the Balti culture in Turtuk.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Khajjiar",
    city: "Himachal Pradesh",
    address: "Khajjiar, Himachal Pradesh",
    distance: 500,
    price: 19999,
    maxGroupSize: 2,
    desc: " It is know as Min Switzerland, an ideal honeymoon destination. Lush meadows, snow-covered Himalayas, and dense forests create a heavenly ambiance. Enjoy trekking, zorbing, jungle safari, and paragliding here.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Dal Lake",
    city: "Kashmir",
    address: "Srinagar, Kashmir",
    distance: 500,
    price: 15599,
    maxGroupSize: 8,
    desc: `Dal Lake, also known as the "Lake of Flowers" or Srinagar's Jewel, is a must-visit in India. Its serenity at 1775 m above sea level and a shikara ride make it an unforgettable experience.`,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Dudhsagar Falls",
    city: "Goa",
    address: "Dabolim, Goa",
    distance: 500,
    price: 21999,
    maxGroupSize: 8,
    desc: `Visit the Mandovi River's 4-tiered majestic Dudhsagar Waterfall to witness the raw power of nature. Its gushing waters create a magical mist, giving it a milky white appearance. Hikers and trekkers will find it exhilarating.`,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Varanasi Ghats",
    city: "Uttar Pradesh",
    address: "Varanasi, Uttar Pradesh",
    distance: 500,
    price: 5999,
    maxGroupSize: 20,
    desc: "Varanasi, one of the oldest cities, offers spiritual tranquility. Ghats along the Ganga River attract pilgrims, and ancient rituals create a unique, serene atmosphere.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Rann of Kutch",
    city: "Gujarat",
    address: "Bhuj, Gujarat",
    distance: 500,
    price: 6999,
    maxGroupSize: 15,
    desc: `The Rann of Kutch, often referred to as the "salt desert" or "salt marsh" of India, boasts a unique, stark beauty, particularly under the moon's glow. To experience the vibrant colors, sounds, and scents of the Rann Utsav, it's a must-visit.`,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon ",
        rating: 5,
      },
      {
        name: " doe",
        rating: 2,
      },
    ],
    photo: tourImg07,
    featured: true,
  },
  {
    id: "08",
    title: "Gulmarg",
    city: "Kashmir",
    address: "Gulmarg, Srinagar, Kashmir",
    distance:1000 ,
    price: 29999,
    maxGroupSize: 8,
    desc: `Explore the natural splendor of Gulmarg, a hill station in the Baramulla district. Set against the backdrop of the Pir Panjal Range, Gulmarg is perfect for skiing, golfing, gondola rides, and leisurely pony rides.`,
    reviews: [],
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
