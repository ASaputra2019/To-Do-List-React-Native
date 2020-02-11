import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = goal => {
    if(goal.length < 1) return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: String(Math.random() * 1000), value: goal }
    ]);
    setAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter(goal => goal.id !== goalId);
    })
  }

  const canceladdGoalHandler = () => {
    setAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={addMode}
        onCancel = {canceladdGoalHandler}
      />
      <FlatList
        data={courseGoals}
        keyExtractor={(item, i) => (item.id)}
        renderItem={(itemData) => (
          <GoalItem 
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});

export default App;