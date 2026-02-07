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
    photo: "https://source.unsplash.com/400x300/?meatballs",
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
    photo: "https://source.unsplash.com/400x300/?vegan,meatballs",
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
    photo: "https://source.unsplash.com/400x300/?pierogi",
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
    photo: "https://source.unsplash.com/400x300/?salmon,soup",
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
    photo: "https://source.unsplash.com/400x300/?lemon,cake",
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
    photo: "https://source.unsplash.com/400x300/?chicken,noodle,soup",
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
    photo: "https://source.unsplash.com/400x300/?pesto,pasta",
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
    photo: "https://source.unsplash.com/400x300/?sweet,potato,fries",
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
    photo: "https://source.unsplash.com/400x300/?baked,ziti",
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
    photo: "https://source.unsplash.com/400x300/?cannoli",
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
    photo: "https://source.unsplash.com/400x300/?gyro",
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
    photo: "https://source.unsplash.com/400x300/?eggplant,mediterranean",
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
    photo: "https://source.unsplash.com/400x300/?falafel,bowl",
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
