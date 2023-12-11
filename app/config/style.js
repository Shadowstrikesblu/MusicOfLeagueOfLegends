import { Platform } from "react-native";

import colors from "./color";

const [loaded] = useFonts({
  League: require('../assets/fonts/BeaufortforLOL-Bold.ttf'),
})
if (!loaded) {
  return null;
}

export default {
  colors,
  text: {
    color: colors.dark,
  },
  font:{
    fontSize: 18,
    fontFamily: 'League',
  }
};
