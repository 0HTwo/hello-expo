import { StatusBar } from 'expo-status-bar';
import { useState, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  
  const [number, setNumber]=useState(10);

  const handleMinus=()=> {
    if(number>0)setNumber(number-1);
  };
  const handlePlus=()=> {
    if(number<10) {
      setNumber(number+1);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>This is My Counter</Text>
      <Text style={styles.number}>{number}</Text>

      <View style={styles.ButtonBox}>
        <TouchableOpacity style={styles.minusButton} onPress={handleMinus} disabled={number==0}>
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
    alignItems: "center",
    backgroundColor: '#f5f5f5',
    paddingTop: 150,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "700",
  },
  number: {
    marginTop: 100,
    fontSize: 80,
    fontWeight: "700",
    color: "black",
  },
  ButtonBox: {
    flexDirection: "row",
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