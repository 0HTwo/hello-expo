import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

export default function App() {
  const [number, setNumber]=useState(20);

  const handleMinus=()=> {
    if(number>0)setNumber(number-1);
  };

  const handlePlus=()=> {
    if(number<20) {
      setNumber(number+1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is My Counter</Text>
      <Text style={styles.number}>{number}</Text>

      <View style={styles.buttonbox}>
        <TouchableOpacity style={styles.minusButton} onPress={handleMinus} disabled={number == 0}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton} onPress={handlePlus}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  number: {
    marginTop: 100,
    fontSize: 80,
    fontWeight: "800",
    color: "black",
  },
  buttonbox: {
    flexDirection: 'row',
    marginTop: 200,
    gap: 50,
  },
  minusButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d84315",
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  plusButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#03a9f4",
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  buttonText: {
    fontSize: 50,
  }
});
