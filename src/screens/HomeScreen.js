import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  const [skillLevel, setSkillLevel] = useState('');
  const [trainingTime, setTrainingTime] = useState('');
  const [raceDistance, setRaceDistance] = useState('');

  const handleStartTraining = () => {
    navigation.navigate('TrainingPlan', { skillLevel, trainingTime, raceDistance });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marathon Training Plan</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your skill level"
        value={skillLevel}
        onChangeText={setSkillLevel}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter weeks to train"
        value={trainingTime}
        onChangeText={setTrainingTime}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter race distance (km)"
        value={raceDistance}
        onChangeText={setRaceDistance}
        keyboardType="numeric"
      />
      <Button title="Generate Training Plan" onPress={handleStartTraining} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default HomeScreen;
