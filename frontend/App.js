import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react'; // Added useEffect and useState
import { Text, View } from 'react-native';

export default function App() {
  // Set up state for storing data and loading/error states
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data from Flask backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/test'); // Fetch from your Flask backend
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json.message); // Set the fetched message
      } catch (error) {
        setError(error.message); // Set the error message
      } finally {
        setLoading(false); // Mark loading as complete
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  // Handle loading state
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Handle error state
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Render the main UI with the fetched data
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{data ? data : "No data available"}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>HELLO!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  message: {
    fontSize: 20,
    marginBottom: 10,
  },
});
