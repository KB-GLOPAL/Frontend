import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterCardScreen() {
  const router = useRouter();
  const [cardName, setCardName] = useState("");
  const [cardBrand, setCardBrand] = useState("");
  const [cardType, setCardType] = useState("");

  const onRegister = () => {
    router.push("/register-country");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 입력 박스 */}
      <View style={styles.box}>
        {/* 카드명 */}
        <Text style={styles.label}>카드명</Text>
        <TextInput
          style={styles.input}
          placeholder="카드명을 입력하세요"
          value={cardName}
          onChangeText={setCardName}
        />

        {/* 카드 브랜드 */}
        <Text style={styles.label}>카드 브랜드</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="VISA / MASTER 등"
          value={cardBrand}
          onChangeText={setCardBrand}
        />

        {/* 카드 종류 */}
        <Text style={styles.label}>카드 종류 (신용/체크)</Text>
        <TextInput
          style={styles.smallInput}
          placeholder="신용 / 체크"
          value={cardType}
          onChangeText={setCardType}
        />
      </View>

      {/* 등록 버튼 */}
      <TouchableOpacity style={styles.registerButton} onPress={onRegister}>
        <Text style={styles.registerText}>등록</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  box: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    paddingTop: 20,
    paddingBottom: 80,
    marginBottom: 30,
    marginTop: 120
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    color: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20
  },
  smallInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    color:"#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 120, // 다른 칸보다 작게
    marginBottom: 20
  },
  registerButton: {
    backgroundColor: "#FFBC00",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});