import React from "react";
import { StyleSheet, Text, View } from "react-native";

const expenses = [
  { id: 1, title: "도쿄 타워 입장권", amount: "¥1,200" },
  { id: 2, title: "편의점 간식", amount: "¥450" },
  { id: 3, title: "지하철 티켓", amount: "¥200" }
];

export default function ExpenseList() {
  return (
    <View style={styles.list}>
      {expenses.map(exp => (
        <View key={exp.id} style={styles.item}>
          <Text>{exp.title}</Text>
          <Text style={styles.amount}>{exp.amount}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { marginTop: 8 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  amount: { fontWeight: "bold" }
});
