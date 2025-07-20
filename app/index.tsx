import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Index() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [expense, setExpense] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [fadeAnim] = useState(new Animated.Value(0));

  const calculateTimeValue = () => {
    const rate = parseFloat(hourlyRate);
    const cost = parseFloat(expense);
    if (rate > 0 && cost > 0) {
      const hours = (cost / rate).toFixed(2);
      setTimeValue(`${hours} hours`);
    } else {
      setTimeValue("Enter valid values");
    }
    Keyboard.dismiss();
  };

  // Fade-in animation
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={["#f8fafc", "#e2e8f0"]} style={styles.container}>
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Time Value</Text>
          <Text style={styles.subtitle}>Track what your time is really worth</Text>
          <Link href="/(tabs)/home" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </Link>
        </Animated.View>

       
       
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#1e3a8a",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "300",
    color: "#475569",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginRight: 8,
  },
  balanceSection: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e3a8a",
    marginTop: 20,
    marginLeft: 10,
  },
  balanceAmount: {
    fontSize: 48,
    fontWeight: "800",
    color: "#1e3a8a",
    marginTop: 10,
    marginLeft: 10,
  },
  balanceLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#64748b",
    marginTop: 4,
    marginLeft: 10,
  },
  calculator: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f1f5f9",
    borderRadius: 16,
    marginHorizontal: 10,
  },
 
  
});