import { View } from "react-native";

import { faDatabase, faBook, faBrain, faChartLine } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles";

import { MainImageButton } from "../../components/buttons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.buttonPair}>
            <MainImageButton icon={faBrain} navigation={navigation} page="Exercises" />
            <MainImageButton icon={faChartLine} navigation={navigation} page="Statistics" />
          </View>
          <View style={styles.buttonPair}>
            <MainImageButton icon={faDatabase} navigation={navigation} page="Database" />
            <MainImageButton icon={faBook} navigation={navigation} page="Stories" />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  )
}