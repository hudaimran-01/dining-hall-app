import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  orderBy,
  Timestamp 
} from 'firebase/firestore';

// Add a new rating
export const addRating = async (dishName, rating, userId, userName) => {
  try {
    const docRef = await addDoc(collection(db, 'ratings'), {
      dishName,
      rating,
      userId,
      userName: userName || 'Anonymous',
      timestamp: Timestamp.now()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding rating:", error);
    return { success: false, error: error.message };
  }
};

// Get all ratings for a specific dish
export const getRatingsForDish = async (dishName) => {
  try {
    const q = query(
      collection(db, 'ratings'), 
      where('dishName', '==', dishName),
      orderBy('timestamp', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const ratings = [];
    querySnapshot.forEach((doc) => {
      ratings.push({ id: doc.id, ...doc.data() });
    });
    return ratings;
  } catch (error) {
    console.error("Error getting ratings:", error);
    return [];
  }
};

// Get average rating for a dish
export const getAverageRating = async (dishName) => {
  const ratings = await getRatingsForDish(dishName);
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((acc, curr) => acc + curr.rating, 0);
  return (sum / ratings.length).toFixed(1);
};

// Get all ratings (for admin dashboard)
export const getAllRatings = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'ratings'));
    const ratings = [];
    querySnapshot.forEach((doc) => {
      ratings.push({ id: doc.id, ...doc.data() });
    });
    return ratings;
  } catch (error) {
    console.error("Error getting all ratings:", error);
    return [];
  }
};

// Get top rated dishes
export const getTopRatedDishes = async (limit = 5) => {
  try {
    const allRatings = await getAllRatings();
    
    // Group by dish name and calculate averages
    const dishMap = {};
    allRatings.forEach(rating => {
      if (!dishMap[rating.dishName]) {
        dishMap[rating.dishName] = { ratings: [], count: 0, total: 0 };
      }
      dishMap[rating.dishName].ratings.push(rating.rating);
      dishMap[rating.dishName].count++;
      dishMap[rating.dishName].total += rating.rating;
    });
    
    // Calculate averages and sort
    const dishes = Object.keys(dishMap).map(dishName => ({
      dishName,
      averageRating: (dishMap[dishName].total / dishMap[dishName].count).toFixed(1),
      totalRatings: dishMap[dishName].count
    }));
    
    dishes.sort((a, b) => b.averageRating - a.averageRating);
    return dishes.slice(0, limit);
  } catch (error) {
    console.error("Error getting top dishes:", error);
    return [];
  }
};