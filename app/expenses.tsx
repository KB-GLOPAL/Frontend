import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ExpensesScreen() {
  const router = useRouter();

  // 더미 데이터 (결제처 + 결제 금액)
  const expenses = [
    { id: "1", merchant: "도쿄 타워 입장권", amount: "¥1200" },
    { id: "2", merchant: "편의점 간식", amount: "¥450" },
    { id: "3", merchant: "지하철 티켓", amount: "¥200" },
    { id: "4", merchant: "돈키호테", amount: "¥3000" },
    { id: "5", merchant: "이치란", amount: "¥2000" },
  ];

  return (
    <View style={styles.container}>
      {/* 로고 */}
      <Image
        source={require("../assets/glopal-logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* 제목 */}
      <Text style={styles.title}>지출 내역</Text>

      {/* 지출 내역 리스트 */}
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text style={styles.merchant}>{item.merchant}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
          </View>
        )}
        style={{ marginTop: 10 }}
      />

      {/* 확인 버튼 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("./home")}
      >
        <Text style={styles.buttonText}>확인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  logo: { width: 350, height: 120, alignSelf: "center", marginBottom: 20, marginTop: 30 },
  title: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  expenseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomColor: "#eee",
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 5,
    padding: 15
  },
  merchant: { fontSize: 16 },
  amount: { fontSize: 16, fontWeight: "bold" },
  button: {
    backgroundColor: "#FFBC00",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 100
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});