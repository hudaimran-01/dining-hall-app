// Mock data for demo - real menus from dining halls

export const mockMenuItems = [
  // NEW DORM - LUNCH
  {
    id: 1,
    dishName: "Baked Meatballs",
    rating: 4.7,
    allergens: ["gluten"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Baked+Meatballs",
    isLocal: true,
    description: "Homemade meatballs baked to perfection"
  },
  {
    id: 2,
    dishName: "Baked Vegan Meatballs",
    rating: 4.5,
    allergens: ["gluten", "soy"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Vegan+Meatballs",
    isLocal: true,
    isVegan: true,
    description: "Plant-based meatballs"
  },
  {
    id: 3,
    dishName: "Pierogi with Caramelized Onions",
    rating: 4.8,
    allergens: ["gluten", "dairy"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Pierogi",
    isLocal: false,
    description: "Traditional pierogi with sweet caramelized onions"
  },
  {
    id: 4,
    dishName: "Tofu Teriyaki",
    rating: 4.3,
    allergens: ["soy"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Tofu+Teriyaki",
    isLocal: false,
    isVegan: true,
    description: "Marinated tofu in teriyaki sauce"
  },
  {
    id: 5,
    dishName: "Greek Pizza",
    rating: 4.6,
    allergens: ["gluten", "dairy"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Greek+Pizza",
    isLocal: false,
    description: "Mediterranean-style pizza"
  },
  {
    id: 6,
    dishName: "Salmon Wild Rice Chowder",
    rating: 4.9,
    allergens: ["fish", "dairy"],
    mealType: "lunch",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Salmon+Chowder",
    isLocal: true,
    description: "Creamy chowder with wild rice and fresh salmon"
  },

  // NEW DORM - DINNER
  {
    id: 7,
    dishName: "Cottage Pie",
    rating: 4.7,
    allergens: ["dairy"],
    mealType: "dinner",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Cottage+Pie",
    isLocal: true,
    description: "Classic British comfort food"
  },
  {
    id: 8,
    dishName: "Nepal Tofu with Tomato",
    rating: 4.4,
    allergens: ["soy"],
    mealType: "dinner",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Nepal+Tofu",
    isLocal: false,
    isVegan: true,
    description: "Nepalese-style tofu in tomato sauce"
  },
  {
    id: 9,
    dishName: "Grilled Chicken Breast",
    rating: 4.5,
    allergens: [],
    mealType: "dinner",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Grilled+Chicken",
    isLocal: true,
    description: "Perfectly grilled chicken breast"
  },
  {
    id: 10,
    dishName: "Lemon Cake",
    rating: 4.8,
    allergens: ["gluten", "dairy", "eggs"],
    mealType: "dinner",
    location: "New Dorm",
    photo: "https://via.placeholder.com/300x200?text=Lemon+Cake",
    isLocal: false,
    isVegan: true,
    description: "Light and refreshing lemon cake"
  },

  // ERDMAN - LUNCH
  {
    id: 11,
    dishName: "Chicken Noodle Soup",
    rating: 4.6,
    allergens: ["gluten"],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Chicken+Soup",
    isLocal: true,
    description: "Classic homemade chicken noodle soup"
  },
  {
    id: 12,
    dishName: "Gemelli with Pesto & Flame-Roasted Veggies",
    rating: 4.7,
    allergens: ["gluten", "dairy", "tree nuts"],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Pesto+Pasta",
    isLocal: true,
    description: "Twisted pasta with fresh pesto and roasted vegetables"
  },
  {
    id: 13,
    dishName: "Chicken Nuggets",
    rating: 4.2,
    allergens: ["gluten", "soy"],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Nuggets",
    isLocal: false,
    isVegan: true,
    description: "Plant-based chicken nuggets"
  },
  {
    id: 14,
    dishName: "Sweet Potato Fries",
    rating: 4.9,
    allergens: [],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Sweet+Potato+Fries",
    isLocal: true,
    isVegan: true,
    description: "Crispy sweet potato fries"
  },
  {
    id: 15,
    dishName: "Mexican Street Corn Salad",
    rating: 4.8,
    allergens: ["dairy"],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Street+Corn",
    isLocal: true,
    description: "Elote-style corn salad"
  },
  {
    id: 16,
    dishName: "Buffalo Chicken Pizza",
    rating: 4.5,
    allergens: ["gluten", "dairy"],
    mealType: "lunch",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Buffalo+Pizza",
    isLocal: false,
    description: "Spicy buffalo chicken on pizza"
  },

  // ERDMAN - DINNER
  {
    id: 17,
    dishName: "Homemade Meatballs in Marinara",
    rating: 4.7,
    allergens: ["gluten"],
    mealType: "dinner",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Meatballs+Marinara",
    isLocal: true,
    description: "House-made meatballs in rich marinara sauce"
  },
  {
    id: 18,
    dishName: "Baked Four Cheese Ziti",
    rating: 4.6,
    allergens: ["gluten", "dairy"],
    mealType: "dinner",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Baked+Ziti",
    isLocal: false,
    description: "Creamy baked pasta with four cheeses"
  },
  {
    id: 19,
    dishName: "Italian Spinach with Pine Nuts",
    rating: 4.4,
    allergens: ["tree nuts"],
    mealType: "dinner",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Spinach",
    isLocal: true,
    isVegan: true,
    description: "Sautéed spinach with toasted pine nuts"
  },
  {
    id: 20,
    dishName: "Cannoli",
    rating: 4.9,
    allergens: ["gluten", "dairy", "eggs"],
    mealType: "dinner",
    location: "Erdman",
    photo: "https://via.placeholder.com/300x200?text=Cannoli",
    isLocal: false,
    description: "Traditional Italian dessert"
  },

  // HAVERFORD DINING CENTER - DINNER
  {
    id: 21,
    dishName: "Beef & Lamb Gyro",
    rating: 4.8,
    allergens: ["gluten"],
    mealType: "dinner",
    location: "Haverford Dining Center",
    photo: "https://via.placeholder.com/300x200?text=Gyro",
    isLocal: true,
    description: "Mediterranean gyro with seasoned beef and lamb"
  },
  {
    id: 22,
    dishName: "Seasoned Boneless Chicken Strips",
    rating: 4.5,
    allergens: [],
    mealType: "dinner",
    location: "Haverford Dining Center",
    photo: "https://via.placeholder.com/300x200?text=Chicken+Strips",
    isLocal: true,
    description: "Tender chicken strips with Mediterranean spices"
  },
  {
    id: 23,
    dishName: "Turkish Eggplant",
    rating: 4.6,
    allergens: [],
    mealType: "dinner",
    location: "Haverford Dining Center",
    photo: "https://via.placeholder.com/300x200?text=Eggplant",
    isLocal: true,
    isVegan: true,
    description: "Roasted eggplant with Turkish spices"
  },
  {
    id: 24,
    dishName: "Moroccan Carrots",
    rating: 4.7,
    allergens: [],
    mealType: "dinner",
    location: "Haverford Dining Center",
    photo: "https://via.placeholder.com/300x200?text=Carrots",
    isLocal: true,
    isVegan: true,
    description: "Carrots with North African spices"
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "Thai Food Week",
    date: "Feb 10-14",
    location: "Haverford Dining Center",
    description: "Experience authentic Thai cuisine all week!",
    internationalBar: "Thai"
  },
  {
    id: 2,
    title: "Mediterranean Night",
    date: "Feb 7",
    location: "Haverford Dining Center",
    description: "Tonight's special: Mediterranean Fare with gyros, chicken, and traditional sides"
  },
  {
    id: 3,
    title: "Sustainability Workshop",
    date: "Feb 12",
    location: "New Dorm",
    description: "Learn about our local sourcing initiatives"
  },
  {
    id: 4,
    title: "Italian Dinner",
    date: "Feb 8",
    location: "Erdman",
    description: "Classic Italian dishes featuring homemade meatballs and fresh pasta"
  }
];

export const mockRatings = [
  { dishName: "Sweet Potato Fries", rating: 5, userName: "Sarah K." },
  { dishName: "Salmon Wild Rice Chowder", rating: 5, userName: "Mike R." },
  { dishName: "Beef & Lamb Gyro", rating: 5, userName: "Alex T." },
  { dishName: "Cannoli", rating: 5, userName: "Jamie L." },
  { dishName: "Lemon Cake", rating: 5, userName: "Chris P." },
  { dishName: "Mexican Street Corn Salad", rating: 5, userName: "Taylor M." },
  { dishName: "Gemelli with Pesto & Flame-Roasted Veggies", rating: 4, userName: "Jordan B." }
];

export const mockLineStatus = "medium";

export const mockTopDishes = [
  { dishName: "Sweet Potato Fries", avgRating: 4.9, numRatings: 203, location: "Erdman" },
  { dishName: "Salmon Wild Rice Chowder", avgRating: 4.9, numRatings: 156, location: "New Dorm" },
  { dishName: "Cannoli", avgRating: 4.9, numRatings: 127, location: "Erdman" },
  { dishName: "Mexican Street Corn Salad", avgRating: 4.8, numRatings: 189, location: "Erdman" },
  { dishName: "Lemon Cake", avgRating: 4.8, numRatings: 145, location: "New Dorm" }
];

export const mockWorstDishes = [
  { dishName: "Chicken Nuggets", avgRating: 4.2, numRatings: 67, location: "Erdman" },
  { dishName: "Tofu Teriyaki", avgRating: 4.3, numRatings: 54, location: "New Dorm" },
  { dishName: "Nepal Tofu with Tomato", avgRating: 4.4, numRatings: 43, location: "New Dorm" }
];

export const mockPoll = {
  question: "What dish would you like to see next week?",
  options: ["Tacos", "Sushi", "Indian Curry", "Pizza"],
  votes: { "Tacos": 45, "Sushi": 67, "Indian Curry": 23, "Pizza": 89 }
};

export const mockVolunteerEvents = [
  {
    id: 1,
    shelterName: "Main Line Community Center",
    shelterAddress: "123 Lancaster Ave, Bryn Mawr, PA",
    date: "Feb 10",
    time: "5:00 PM",
    volunteersNeeded: 6,
    volunteersSignedUp: ["user1", "user2", "user3"],
    description: "Help deliver excess food from New Dorm to local shelter"
  },
  {
    id: 2,
    shelterName: "Ardmore Food Pantry",
    shelterAddress: "456 Haverford Rd, Ardmore, PA",
    date: "Feb 15",
    time: "4:30 PM",
    volunteersNeeded: 8,
    volunteersSignedUp: ["user1", "user4"],
    description: "Weekly food delivery from all three dining halls"
  }
];

export const mockWasteData = [
  { date: "Feb 6", dishName: "Chicken Nuggets", amount: "3.2", mealType: "lunch", location: "Erdman" },
  { date: "Feb 6", dishName: "Greek Pizza", amount: "2.1", mealType: "lunch", location: "New Dorm" },
  { date: "Feb 5", dishName: "Tofu Teriyaki", amount: "1.8", mealType: "lunch", location: "New Dorm" },
  { date: "Feb 5", dishName: "Baked Ziti", amount: "2.5", mealType: "dinner", location: "Erdman" }
];