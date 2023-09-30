import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
        <Image
          style={{ width: 150, height: 150 }}
          source={require("/lock.jpg")}
        />
        <StatusBar style="auto" />
        <View>
          <Text
            style={{
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 20,
            }}
          >
            FORGET
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>PASSWORD</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 25 }}>
            Provide your account’s email for which you
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 45 }}>
            want to reset your password
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
            <Image
              source={require("/icons8-email-100.png")}
              style={{ width: 20, height: 20, marginLeft: 5, marginRight: 10 }}
            />

            <Text style={{ fontWeight: "bold" }}>Email</Text>
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
            <Text style={{ fontWeight: "bold" }}>Next</Text>
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
