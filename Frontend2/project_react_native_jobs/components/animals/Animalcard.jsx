import { Image, Text, View, StyleSheet } from "react-native";


function AnimalCard({ chickens,image, number, purpose, origin, description,date }) {
  return (
    <View >
    <View className = 'flex flex-row'>
    <View>
      <Image
        source={image}
      />
    </View>

      <View style={styles.container1}>
    
    <View style={styles.textContainer}>
    <Text style={styles.label}>Flock Number:</Text>
    <Text style={styles.value}>{number}</Text>
    </View>

    <View style = {styles.textContainer}>
    <Text style={styles.label}>Purpose:</Text>
    <Text style={styles.value}>{purpose}</Text>
    </View>

    <View style = {styles.textContainer}>
    <Text style={styles.label}>Acquired:</Text>
    <Text style={styles.value}>{date}</Text>
    </View>
    
    <View style = {styles.textContainer}>
    <Text style={styles.label}>Number of Chickens:</Text>
    <Text style={styles.value}>{chickens}</Text>
    </View>

  </View>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
  },
  
  textContainer: {
    display: 'flex',
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
});

export default AnimalCard;