import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddExpenseScreen() {
  const router = useRouter();
  const [merchant, setMerchant] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  return (
    <View style={styles.container}>
      {/* 로고 */}
      <Image
        source={require("../assets/glopal-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* 결제처 */}
      <Text style={styles.label}>결제처</Text>
      <TextInput
        style={styles.input}
        value={merchant}
        onChangeText={setMerchant}
      />

      {/* 결제 금액 */}
      <Text style={styles.label}>결제 금액</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      {/* 소비 카테고리 */}
      <Text style={styles.label}>소비 카테고리</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
      />

      {/* 추가 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // 나중에 결제 내역 저장 로직 추가 예정
          router.push("./expenses"); // 결제 내역 페이지로 이동
        }}
      >
        <Text style={styles.buttonText}>추가</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  logo: { width: 350, height: 120, alignSelf: "center", marginBottom: 20, marginTop: 30 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 30, marginBottom: 6, },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#FFBC00",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});