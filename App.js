import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// class ErrorBoundary extends React.Component {
//   state = { hasError: false }

//   static getDerivedStateFromError (error) {
//     return { hasError: true }
//   }

//   componentDidCatch (error, info) {
//     logErrorToService(error, info.componentStack)
//   }

//   render () {
//     return this.state.hasError
//       ? <FallbackComponent />
//       : this.props.children
//   }
// };

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

// const App = () => (
//   <ErrorBoundary>
//     <Children />
//   </ErrorBoundary>
// );

export default App;