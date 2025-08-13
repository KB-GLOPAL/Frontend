import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function RegisterCountryScreen() {
  const router = useRouter();
  const [country, setCountry] = useState("");

  const [map, setMap] = useState<"korea" | "japan">("korea");

  const showJapanMap = () => setMap("japan");

   const onComplete = () => {
    router.push("/home");
   };

  return (
    <View style={styles.container}>
      {/* 입력 박스 */}
      <View style={styles.box}>
        <Text style={styles.label}>이용 국가</Text>

        {/* 국가 입력 */}
        <View style={styles.inputWrapper}>
          <Image
                source={require("../assets/search.png")}
                style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="국가를 입력하세요"
            value={country}
            onChangeText={setCountry}
            onSubmitEditing={showJapanMap}
          />
        </View>

        {/* 현재 위치로 찾기 버튼 */}
        <TouchableOpacity style={styles.locationButton} onPress={showJapanMap}>
          <Image
            source={require("../assets/location-sharp.png")}
            style={styles.locationIcon}
          />
          <Text style={styles.locationButtonText}>현재 위치로 찾기</Text>
        </TouchableOpacity>
      

      {/* 지도 (임시 이미지) */}
      <Image
        source={
            map === "korea"
              ? require("../assets/korea-map.png")
              : require("../assets/japan-map.png")
          }
        style={styles.mapImage}
      />

      {/* 등록 버튼 */}
      <TouchableOpacity style={styles.completeButton} onPress={onComplete}>
          <Text style={styles.completeText}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginTop: 100
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  icon: {
    marginRight: 5,
    height: 20,
    width: 20
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFBC00",
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom:10
  },
  locationIcon: {
    marginRight: 5,
    height: 20,
    width: 20
  },
  locationButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    backgroundColor: "#eee",
    marginTop: 40,
    marginBottom: 50
  },
  completeButton: {
    backgroundColor: "#FFBC00",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  completeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});