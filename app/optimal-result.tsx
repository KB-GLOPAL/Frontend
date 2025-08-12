import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OptimalResultScreen() {
  const router = useRouter();

  // 더미 데이터
  const cardName = "트래블러스 체크카드";
  const amountJPY = "¥ 3000";
  const amountKRW = "₩28,205";
  const savingInfo = "B 카드보다 약 100원 절약됩니다";

  return (
    <View style={styles.container}>
      {/* 로고 */}
      <Image
        source={require("../assets/glopal-logo.png")} // 로고 이미지 경로 맞게 수정
        style={styles.logo}
        resizeMode="contain"
      />

      {/* 타이틀 */}
      <Text style={styles.title}>최적 결제 수단</Text>

      {/* 체크 아이콘 */}
      <Image
        source={require("../assets/check-circle-solid.png")} // 체크 아이콘 경로 맞게 수정
        style={styles.checkIcon}
        resizeMode="contain"
      />

      {/* 카드 이름 */}
      <Text style={styles.cardName}>{cardName}</Text>

      {/* 결제 금액 */}
      <Text style={styles.amount}>{amountJPY}</Text>

      {/* 예상 결제 금액 (한화) */}
      <View style={styles.amountRow}>
        <Text style={styles.label}>예상 결제금액</Text>
        <Text style={styles.value}>{amountKRW}</Text>
      </View>

      {/* 절약 정보 */}
      <Text style={styles.savingInfo}>{savingInfo}</Text>

      {/* 확인 버튼 */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => router.push("/home")} // 홈으로 이동
      >
        <Text style={styles.confirmButtonText}>확인</Text>
      </TouchableOpacity>

      {/* 리포트 추가 (미연결) */}
      <TouchableOpacity>
        <Text style={styles.reportText}>리포트 추가</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 350,
    height: 120,
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  checkIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  amount: {
    fontSize: 20,
    color: "#666",
    marginBottom: 20,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  value: {
    fontSize: 20,
    color: "#333",
  },
  savingInfo: {
    fontSize: 16,
    color: "#000000ff",
    marginBottom: 30,
  },
  confirmButton: {
    backgroundColor: "#FFBC00",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  reportText: {
    fontSize: 14,
    color: "#aaa",
    textDecorationLine: "underline",
  },
});