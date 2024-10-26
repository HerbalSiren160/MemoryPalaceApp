import { View } from "react-native";

import { faDatabase, faBook, faBrain, faChartLine } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles";

import { MainImageButton } from "../../components/buttons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.buttonPair}>
            <MainImageButton icon={faDatabase}/>
            <MainImageButton icon={faBook}/>
          </View>
          <View style={styles.buttonPair}>
            <MainImageButton icon={faBrain}/>
            <MainImageButton icon={faChartLine}/>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
  )
}