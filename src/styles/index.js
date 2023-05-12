import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export const styles = StyleSheet.create({
  mainBtn: {
    marginTop: "90px",
    width: "214px",
    height: "53px",

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 15,

    backgroundColor: "#5DBD21",
    padding: 10,
  },

  pageLogo: {
    width: "100%",
    height: "300px",
    marginTop: "80px",
    alignItems: "center",
  },

  profilePicture: {
    width: "55px",
    height: "55px",
    borderRadius: "50px",
  },
  recomendationPicture: {
    width: "160px",
    height: "185px",
    borderRadius: "15px",
  },

  styledContainer: {
    flex: 1,
    padding: "1rem",
    paddingTop: `${StatusBar + 10}px`,
    backgroundColor: "#fff",
  },

  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  pageTitle: {
    fontFamily: "poppins-regular",
    fontWeight: "700",
    fontSize: "22px",
    alignItems: "center",
    color: "#333333",
    flexDirection: "row",
  },

  pageTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },

  titleLogo: {
    fontFamily: "poppins-regular",
    fontWeight: "bold",
    fontSize: "26px",
    color: "#5DBD21",
  },

  descText: {
    fontFamily: "poppins-regular",
    color: "#BBBABD",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  iconBack: {
    backgroundColor: "#fff",
    paddingBottom: "2rem",
  },

  roundedBtn: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #CDDAE3",
    borderRadius: "26px",

    width: "100%",
    height: "47px",

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  textBtn: {
    fontFamily: "poppins-regular",
    fontWeight: "bold",
    paddingLeft: "12px",
  },

  whiteText: {
    color: "#fff",
  },

  fbBtn: {
    backgroundColor: "#1977F2",
  },

  mainTitle: {
    fontFamily: "poppins-regular",

    fontSize: "18px",
    fontWeight: "bold",
    margin: "1rem",
  },
  descTitle: {
    fontFamily: "poppins-regular",

    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "0.5rem",
  },
});

export const fbRoundedBtn = StyleSheet.compose(styles.roundedBtn, styles.fbBtn);

export const fbTextBtn = StyleSheet.compose(styles.textBtn, styles.whiteText);

export const mainTextBtn = StyleSheet.compose(styles.textBtn, styles.whiteText);
