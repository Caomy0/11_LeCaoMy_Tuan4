import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { YellowBox } from "react-native-web";

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
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30%",
          }}
        >
          {" "}
          <View style={styles.circle}></View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            GROW
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {" "}
            YOUR BUSSINESS{" "}
          </Text>
          <Text style={{ marginTop: 40, fontWeight: "bold", fontSize: 15 }}>
            we will help you to grow your business using
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            online server
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%",
            marginLeft: "15%",
            marginTop: 50,
          }}
        >
          <View style={[{ width: 100, margin: 10, backgroundColor: "red" }]}>
            <Button title="Login" color="rgba(251, 203, 0, 1)" />
          </View>
          <View style={[{ width: 100, margin: 10, backgroundColor: "red" }]}>
            <Button title="Sign up" color="rgba(251, 203, 0, 1)" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 10,
              fontSize: 15,
            }}
          >
            How We Word ?
          </Text>
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
  },
  circle: {
    width: 100, // Adjust the size of the circle as needed
    height: 100, // It should have equal width and height for a perfect circle
    backgroundColor: "transparent", // The background should be transparent to create a circle
    borderRadius: 50, // Makes the element circular by setting borderRadius to half of the width/height
    borderWidth: 10, // Adds a border with a width of 2
    borderColor: "#333", // Sets the border color to #333 or any color of your choice
  },
});
