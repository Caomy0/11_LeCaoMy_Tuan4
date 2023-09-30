import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(199, 244, 246, 1)",
          "rgba(209, 244, 246, 1)",
          "rgba(229, 244, 245, 1)",
          "rgba(0, 204, 249, 1)",
        ]}
        style={styles.gradient}
      >
        <StatusBar style="auto" />
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 80,
              marginLeft: 20,
            }}
          >
            CODE
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 50,
              fontWeight: "bold",
              fontSize: 30,
              marginLeft: 20,
            }}
          >
            VERIFICATION
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 40 }}>
            Enter ontime password sent on
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 45 }}>
            ++849092605798
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={[
              {
                width: 305,
                height: 45,
                margin: 10,
                backgroundColor: "#C4C4C4",
                flexDirection: "row",
                alignItems: "center",
              },
            ]}
          >
            <Text style={{ fontWeight: "bold" }}></Text>
          </View>
        </TouchableOpacity>
        <View
          style={[
            {
              width: 305,
              height: 45,
              margin: 10,
              backgroundColor: "#E3C000",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity>
            {" "}
            <Text style={{ fontWeight: "bold" }}>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
