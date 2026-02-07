// Mock data for demo - no Firebase needed!

export const mockMenuItems = [
  {
    id: 1,
    dishName: "Chicken Tikka Masala",
    rating: 4.8,
    allergens: ["dairy"],
    mealType: "lunch",
    location: "Haverford",
    photo: "https://via.placeholder.com/300x200?text=Chicken+Tikka",
    isLocal: true
  },
  {
    id: 2,
    dishName: "Veggie Burger",
    rating: 4.2,
    allergens: ["gluten", "soy"],
    mealType: "lunch",
    location: "Haverford",
    photo: "https://via.placeholder.com/300x200?text=Veggie+Burger",
    isLocal: true
  },
  {
    id: 3,
    dishName: "Caesar Salad",
    rating: 4.5,
    allergens: ["dairy", "fish"],
    mealType: "lunch",
    location: "Bryn Mawr",
    photo: "https://via.placeholder.com/300x200?text=Caesar+Salad",
    isLocal: false
  },
  {
    id: 4,
    dishName: "Pasta Alfredo",
    rating: 4.6,
    allergens: ["dairy", "gluten"],
    mealType: "dinner",
    location: "Haverford",
    photo: "https://via.placeholder.com/300x200?text=Pasta+Alfredo",
    isLocal: false
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "Thai Food Week",
    date: "Feb 10-14",
    location: "Haverford Dining Hall",
    description: "Experience authentic Thai cuisine all week!",
    internationalBar: "Thai"
  },
  {
    id: 2,
    title: "Sustainability Workshop",
    date: "Feb 12",
    location: "Bryn Mawr Café",
    description: "Learn about our local sourcing initiatives"
  }
];

export const mockRatings = [
  { dishName: "Chicken Tikka Masala", rating: 5, userName: "Sarah K." },
  { dishName: "Chicken Tikka Masala", rating: 5, userName: "Mike R." },
  { dishName: "Chicken Tikka Masala", rating: 4, userName: "Alex T." },
  { dishName: "Veggie Burger", rating: 4, userName: "Jamie L." },
  { dishName: "Caesar Salad", rating: 5, userName: "Chris P." }
];

export const mockLineStatus = "medium"; // short, medium, long

export const mockTopDishes = [
  { dishName: "Chicken Tikka Masala", avgRating: 4.8, numRatings: 127 },
  { dishName: "Mac and Cheese", avgRating: 4.7, numRatings: 203 },
  { dishName: "Stir Fry", avgRating: 4.6, numRatings: 89 },
  { dishName: "Pasta Alfredo", avgRating: 4.6, numRatings: 156 },
  { dishName: "Caesar Salad", avgRating: 4.5, numRatings: 94 }
];

export const mockPoll = {
  question: "What dish would you like to see next week?",
  options: ["Tacos", "Sushi", "Indian Curry", "Pizza"],
  votes: { "Tacos": 45, "Sushi": 67, "Indian Curry": 23, "Pizza": 89 }
};