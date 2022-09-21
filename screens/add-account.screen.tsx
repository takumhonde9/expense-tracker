import React, { useEffect } from "react";
import Text from "../components/typography/text";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../navigators/root-stack.navigator";
import { Button, View } from "react-native";
import { colors } from "../theme/ui";
import Modal from "react-native-modal";

function AddAccountScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Add Account</Text>
    </View>
  );
}

export default AddAccountScreen;
