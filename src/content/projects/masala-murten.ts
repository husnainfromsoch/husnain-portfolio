import type { Project } from "./types";

const project: Project = {
  slug: "masala-murten",
  title: "Masala Indian Cuisine",
  client: "Masala Indian Cuisine",
  country: "Switzerland",
  market: "Switzerland (Murten)",
  industry: "Restaurant",
  role: "Built the website from scratch",
  services: ["websites"],
  serviceLabel: "Website Development",
  stack: ["WordPress", "Elementor"],
  year: "2026",
  liveUrl: "https://masalamurten.ch",
  summary:
    "A WordPress site for an Indian restaurant in Murten's old town, built to get guests to the menu and to book a table.",
  problem:
    "Restaurant visitors want four things fast: the menu, the opening hours, where it is, and how to book.",
  solution:
    "I built the site in WordPress with Elementor: a homepage with a reservation button and menu link, an about section, specialties, \"why choose us\", a chef section, an ambiance section with the restaurant's own photos, and guest quotes. Dedicated pages cover the menu, opening hours, reservations and contact, and a pop-up promotes a takeaway offer.",
  keyFeatures: [
    "Reserve and menu buttons in the hero",
    "Click-to-call phone number in the header",
    "Real restaurant photography instead of stock images",
    "Takeaway discount pop-up",
  ],
  results: [
    "The restaurant has a live website with menu, hours, reservations and contact all one click away.",
  ],
  closing:
    "For a restaurant, a website doesn't need to be clever. It needs to get guests to the menu and the booking page fast. This one does.",
  cover: {
    src: "/images/work/covers/masala-murten.jpg",
    alt: "Bowls of Indian curry with rice and fresh coriander",
  },
  images: [
    {
      src: "/images/work/masala-murten-home.jpg",
      alt: "Masala Indian Cuisine Murten WordPress homepage",
    },
    {
      src: "/images/work/masala-murten-menu.jpg",
      alt: "Menu page of the Masala Indian Cuisine website",
    },
  ],
};

export default project;
