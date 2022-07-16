import {
    StyleSheet,
    Dimensions
  } from 'react-native';

  const windowHeight = Dimensions.get("window").height;

  const styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "white",
      // shadowColor: "gray",
      // shadowOpacity: 2,
      // shadowRadius: 2,
      // shadowOffset: 2,
      padding: 10
    },

    column: {
      flex: 1,
      alignItems: "center"
    },

    titleText: {
      color: "black",
      fontSize: 24,
      fontWeight: "bold"
    },

      text: {
        color: "gray",
        fontSize: 15
      },

      center: {
        flex: 1,
        alignSelf: "center",
        padding: windowHeight / 1.6
      },

      touch: {
        marginTop: -15
      },

      coin: {
        flex: 1,
        height: 30,
        width: 30,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "orange",
        alignSelf: "center",
        alignItems: "center",
        marginLeft: 50,
        marginBottom: -20,
        zIndex: 1
      },

      coinText: {
        color: "gray",
        fontSize: 15
      }
})

  export default styles;
  