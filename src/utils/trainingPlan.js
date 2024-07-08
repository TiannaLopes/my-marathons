const generateTrainingPlan = (level, weeksUntilRace, raceDistance) => {
  const baseMileage = {
    beginner: 20,
    intermediate: 30,
    advanced: 40,
  };

  const weeklyIncrease = {
    beginner: 10,
    intermediate: 15,
    advanced: 20,
  };

  const longRunDistance = {
    beginner: 5,
    intermediate: 10,
    advanced: 15,
  };

  const plan = [];
  let weeklyMileage = baseMileage[level];

  for (let week = 1; week <= weeksUntilRace; week++) {
    const weekPlan = [];
    const longRun = longRunDistance[level] + (week - 1) * 2;

    // Assign running days (e.g., 4 days of running)
    for (let day = 1; day <= 4; day++) {
      const runDistance = (weeklyMileage - longRun) / 3; // Spread the mileage
      weekPlan.push({
        day: day,
        type: 'run',
        distance: runDistance.toFixed(1), // Keep one decimal
      });
    }

    // Assign long run day (e.g., day 5)
    weekPlan.push({
      day: 5,
      type: 'long run',
      distance: longRun.toFixed(1),
    });

    // Assign rest days (e.g., days 6 and 7)
    weekPlan.push({
      day: 6,
      type: 'rest',
    });
    weekPlan.push({
      day: 7,
      type: 'rest',
    });

    plan.push({
      week: week,
      plan: weekPlan,
    });

    // Increase weekly mileage
    weeklyMileage += weeklyIncrease[level];
  }

  return plan;
};

export default generateTrainingPlan;
