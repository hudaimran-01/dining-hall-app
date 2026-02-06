import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function App() {
  
  const testFirebase = async () => {
    try {
      await addDoc(collection(db, 'test'), {
        message: "Firebase is working!",
        timestamp: new Date()
      });
      alert("Success! Check your Firebase Console → Firestore Database");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <h1>Dining Hall App</h1>
      <button onClick={testFirebase} style={{ 
        padding: '10px 20px', 
        fontSize: '16px',
        cursor: 'pointer'
      }}>
        Test Firebase Connection
      </button>
    </div>
  );
}

export default App;