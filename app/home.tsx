import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardCarousel from "../components/CardCarousel";
import ExpenseList from "../components/ExpenseList";

export default function HomeScreen() {
  const router = useRouter();
  const country = "일본"; // 더미 데이터

  return (
    <ScrollView style={styles.container}>
      {/* 상단바 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{country}</Text>
      </View>

      {/* 보유 카드 */}
      <Text style={styles.sectionTitle}>보유 카드</Text>
      <CardCarousel />

      {/* 최적 결제 수단 찾기 버튼 */}
      <TouchableOpacity style={styles.optimalButton}
      onPress={() => router.push("./optimal-payment")}>
        <Text style={styles.optimalButtonText}>최적 결제 수단 찾기</Text>
      </TouchableOpacity>

      {/* 지출 내역 */}
      <View style={styles.expenseHeader}>
        <Text style={styles.sectionTitle}>지출 내역</Text>
        <TouchableOpacity>
          <Text style={styles.moreText}>더보기</Text>
        </TouchableOpacity>
      </View>
      <ExpenseList />

      {/* 지출 내역 추가 버튼 */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* 소비 리포트 버튼 */}
      <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportButtonText}>소비 리포트</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { alignItems: "center", paddingVertical: 12, backgroundColor: "#FFBC00", borderRadius: 8 },
  headerText: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 8 },
  optimalButton: { backgroundColor: "#FFBC00", padding: 14, borderRadius: 8, alignItems: "center", marginTop: 12 },
  optimalButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  expenseHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 },
  moreText: { color: "#FFBC00", fontWeight: "bold" },
  addButton: {
    backgroundColor: "#FFBC00",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 12
  },
  addButtonText: { fontSize: 28, color: "#fff", fontWeight: "bold" },
  reportButton: {
    backgroundColor: "#FFBC00",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 30
  },
  reportButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});