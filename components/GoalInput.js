import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (txt) => {
    setGoal(txt);
  };

  const onAddGoal = () => {
    addGoalHandler(goal);
    setGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={onAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "48%"
  }
})

export default GoalInput;