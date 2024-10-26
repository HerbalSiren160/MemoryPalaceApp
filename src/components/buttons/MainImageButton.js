import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, TouchableHighlight } from "react-native"


export function MainImageButton({icon, navigation, page}) {
  return <TouchableHighlight style={styles.mainButton} onPress={() => navigation.navigate(page)}>
    <FontAwesomeIcon icon={icon} color={'#fafafa'} size={48} />
  </TouchableHighlight>
}

const styles = StyleSheet.create({
  mainButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fafafa',
    backgroundColor: '#1e1e1e',
    borderRadius: 5,
    margin: 15,
    width: 150,
    height: 200
  },
})