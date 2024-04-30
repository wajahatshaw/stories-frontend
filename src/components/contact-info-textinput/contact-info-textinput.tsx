import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./contact-info-textinput-styles";

const ContactInfoTextInput = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.nameFieldText}>First name</Text>
      <View style={styles.textInput}>
        <TextInput
          value={fName}
          onChangeText={(text) => setFName(text)}
          style={styles.input}
        />
      </View>
      <Text style={styles.nameFieldText}>Last name</Text>
      <View style={styles.textInput}>
        <TextInput
          value={lName}
          onChangeText={(text) => setLName(text)}
          style={styles.input}
        />
      </View>
      <Text style={styles.nameFieldText}>Email</Text>
      <View style={styles.textInput}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default ContactInfoTextInput;
