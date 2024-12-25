import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Scoreboard from '../components/Scoreboard';

const MatchScreen = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleAddScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) Alert.alert('Winner!', 'Team A Wins!');
    } else if (team === 'B') {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) Alert.alert('Winner!', 'Team B Wins!');
    }
  };

  const handleSubtractScore = (team) => {
    if (team === 'A' && scoreA > 0) setScoreA(scoreA - 1);
    if (team === 'B' && scoreB > 0) setScoreB(scoreB - 1);
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Match</Text>
      <Scoreboard teamName="Team A" score={scoreA} onAdd={() => handleAddScore('A')} onSubtract={() => handleSubtractScore('A')} />
      <Scoreboard teamName="Team B" score={scoreB} onAdd={() => handleAddScore('B')} onSubtract={() => handleSubtractScore('B')} />
      <Button title="Reset Match" onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MatchScreen;
