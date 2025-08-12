import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function OptimalPaymentScreen() {
  const router = useRouter();
  const [store, setStore] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 로고 */}
      <Image
        source={require("../assets/glopal-logo.png")} // 로고 경로에 맞게 수정
        style={styles.logo}
        resizeMode="contain"
      />

      {/* 결제처 */}
      <Text style={styles.label}>결제처</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={store}
        onChangeText={setStore}
      />

      {/* 결제 금액 */}
      <Text style={styles.label}>결제 금액</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* 소비 카테고리 */}
      <Text style={styles.label}>소비 카테고리</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={category}
        onChangeText={setCategory}
      />

      {/* 분석 버튼 */}
      <TouchableOpacity
        style={styles.analyzeButton}
        onPress={() => router.push("./optimal-result")} // 결과 화면 경로 (추후 생성)
      >
        <Text style={styles.analyzeButtonText}>분석</Text>
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
  logo: {
    width: 350,
    height: 120,
    marginBottom: 20,
    marginTop: 30,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  analyzeButton: {
    backgroundColor: "#FFBC00",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 50,
  },
  analyzeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});