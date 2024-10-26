import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

export default function StatisticsScreen() {
  return <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Statistics</Text>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
}