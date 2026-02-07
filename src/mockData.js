// Mock data for demo – UI-focused, no backend required

export const mockMenuItems = [
  // NEW DORM
  {
    id: 1,
    dishName: "Baked Meatballs",
    rating: 4.7,
    allergens: ["gluten"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://plus.unsplash.com/premium_photo-1712598971951-0169ec4e7037?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLocal: true,
    description: "Homemade meatballs baked to perfection"
  },
  {
    id: 2,
    dishName: "Vegan Meatballs",
    rating: 4.5,
    allergens: ["soy"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://plus.unsplash.com/premium_photo-1712428783686-c00f5c3a6c4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLocal: true,
    isVegan: true,
    description: "Plant-based meatballs in rich sauce"
  },
  {
    id: 3,
    dishName: "Pierogi with Caramelized Onions",
    rating: 4.8,
    allergens: ["gluten", "dairy"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://images.unsplash.com/photo-1581515092908-42bae9a80350?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLocal: false,
    description: "Classic pierogi topped with sweet onions"
  },
  {
    id: 4,
    dishName: "Salmon Wild Rice Chowder",
    rating: 4.9,
    allergens: ["fish", "dairy"],
    mealType: "dinner",
    location: "New Dorm",
    photo: "https://plus.unsplash.com/premium_photo-1664391935474-f1e502d3ad61?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLocal: true,
    description: "Creamy chowder with wild rice and salmon"
  },
  {
    id: 5,
    dishName: "Lemon Cake",
    rating: 4.8,
    allergens: ["gluten", "dairy", "eggs"],
    mealType: "dinner",
    location: "New Dorm",
    photo: "https://images.unsplash.com/photo-1654546518361-eef83e447521?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLocal: false,
    description: "Light and refreshing lemon dessert"
  },

  // ERDMAN
  {
    id: 6,
    dishName: "Chicken Noodle Soup",
    rating: 4.6,
    allergens: ["gluten"],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://plus.unsplash.com/premium_photo-1675707499311-726434ce10fc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLocal: true,
    description: "Classic comfort soup"
  },
  {
    id: 7,
    dishName: "Gemelli with Pesto & Roasted Veggies",
    rating: 4.7,
    allergens: ["gluten", "dairy", "tree nuts"],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://stephaniemormina.com/wp-content/uploads/2024/01/IMG_2808-edited-1.jpeg",
    isLocal: true,
    description: "Fresh pesto pasta with seasonal vegetables"
  },
  {
    id: 8,
    dishName: "Sweet Potato Fries",
    rating: 4.9,
    allergens: [],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://images.unsplash.com/photo-1725006015031-04bf253ae9f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isLocal: true,
    isVegan: true,
    description: "Crispy oven-baked fries"
  },
  {
    id: 9,
    dishName: "Baked Four Cheese Ziti",
    rating: 4.6,
    allergens: ["gluten", "dairy"],
    mealType: "dinner",
    location: "Erdman",
    photo: "https://grandbaby-cakes.com/wp-content/uploads/2021/03/Baked-Ziti14-scaled.jpg",
    isLocal: false,
    description: "Creamy baked pasta with four cheeses"
  },
  {
    id: 10,
    dishName: "Cannoli",
    rating: 4.9,
    allergens: ["gluten", "dairy", "eggs"],
    mealType: "dinner",
    location: "Erdman",
    photo: "https://www.recipetineats.com/tachyon/2017/09/Spinach-Ricotta-Cannelloni-1-copy-1.jpg",
    isLocal: false,
    description: "Traditional Italian dessert"
  },

  // HAVERFORD DINING CENTER
  {
    id: 11,
    dishName: "Beef & Lamb Gyro",
    rating: 4.8,
    allergens: ["gluten"],
    mealType: "dinner",
    location: "Haverford Dining Center",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8NPXARvgCLjqAtbZJByMOzUhMMXFljwUWA&s",
    isLocal: true,
    description: "Mediterranean gyro with seasoned meat"
  },
  {
    id: 12,
    dishName: "Turkish Eggplant",
    rating: 4.6,
    allergens: [],
    mealType: "dinner",
    location: "Haverford Dining Center",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQzoDklbqAnqAyUVsUqn_6_69ZihuXL5PiQ&s",
    isLocal: true,
    isVegan: true,
    description: "Roasted eggplant with Turkish spices"
  },
  {
    id: 13,
    dishName: "Falafel Bowl",
    rating: 4.7,
    allergens: ["sesame"],
    mealType: "lunch",
    location: "Haverford Dining Center",
    photo: "https://cool-simple.com/cdn/shop/articles/Bol_falafels_a18c8367-1a60-4132-8e78-0f8a3f363288.jpg?v=1748288794",
    isLocal: true,
    isVegan: true,
    description: "Falafel with hummus and fresh veggies"
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "Thai Food Week",
    date: "Feb 10–14",
    location: "Haverford Dining Center",
    description: "Authentic Thai cuisine all week",
    internationalBar: "Thai"
  },
  {
    id: 2,
    title: "Italian Night",
    date: "Feb 8",
    location: "Erdman",
    description: "Homemade pasta and classic Italian dishes"
  }
];

export const mockLineStatus = "medium";

export const mockTopDishes = [
  { dishName: "Sweet Potato Fries", avgRating: 4.9, location: "Erdman" },
  { dishName: "Salmon Chowder", avgRating: 4.9, location: "New Dorm" },
  { dishName: "Cannoli", avgRating: 4.9, location: "Erdman" }
];
