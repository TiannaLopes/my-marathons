import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import generateTrainingPlan from '../utils/trainingPlan';

function TrainingPlanScreen({ route }) {
  const { skillLevel, trainingTime, raceDistance } = route.params;
  const [trainingPlan, setTrainingPlan] = useState([]);

  useEffect(() => {
    const plan = generateTrainingPlan(skillLevel, trainingTime, raceDistance);
    setTrainingPlan(plan);
  }, [skillLevel, trainingTime, raceDistance]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Training Plan</Text>
      {trainingPlan.map((week) => (
        <View key={week.week} style={styles.weekContainer}>
          <Text style={styles.weekTitle}>Week {week.week}</Text>
          {week.plan.map((day, index) => (
            <Text key={index} style={styles.dayText}>
              Day {day.day}: {day.type} - {day.distance || ''}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  weekContainer: {
    marginBottom: 16,
  },
  weekTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  dayText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default TrainingPlanScreen;
