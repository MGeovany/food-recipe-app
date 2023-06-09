import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text } from "react-native";
import { View } from "react-native";

import { styles } from "../styles";
import { getAllRecipes } from "../api/poll";
import { SavedList } from "../components/SavedList";

export const Main = ({ navigation }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await getAllRecipes(1);

        const inputArray = response.data;
        const transformedArray = inputArray.map((obj) => {
          return {
            id: obj.recipe_id,
            vote_count: obj.vote_count,
          };
        });

        setDataList(transformedArray);
      } catch (error) {
        console.error("Error fetching poll:", error);
      }
    };

    fetchPoll();
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        paddingBottom: "10rem",
      }}
    >
      <View style={styles.styledContainer}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-regular",
              fontWeight: 900,
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              color: "#333333",
            }}
          >
            Que vamos
          </Text>
          <Text
            style={{
              fontFamily: "poppins-regular",
              fontWeight: 900,
              fontSize: "30px",
              color: "#333333",
            }}
          >
            A
            <Text
              style={{
                color: "#5DBD21",
              }}
            >
              {" "}
              COMER{" "}
            </Text>
            HOY?
          </Text>
        </View>

        {dataList.length <= 0 ? (
          <View
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              marginTop: "10rem",
            }}
          >
            <Text
              style={{
                color: "#B1B6BB",
                fontFamily: "poppins-regular",
                fontWeight: 900,
                fontSize: "20px",
              }}
            >
              Inicia sugeriendo recetas con el icono
            </Text>
            <Pressable onPress={() => navigation.navigate("Search")}>
              <Image
                style={{
                  width: "68px",
                  height: "68px",
                  marginTop: "2rem",
                }}
                source={require("../assets/icons/addGray.png")}
              />
            </Pressable>
          </View>
        ) : (
          <View>
            <Pressable>
              <View
                style={{
                  backgroundColor: "#5dbd21",
                  border: "1px solid #CDDAE3",
                  borderRadius: "26px",

                  width: "100%",
                  height: "47px",

                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontFamily: "poppins-regular",
                    fontWeight: "bold",
                    paddingLeft: "15px",
                    color: "#fff",
                  }}
                >
                  Terminar encuesta
                </Text>
              </View>
            </Pressable>
            <SavedList
              navigation={navigation}
              recipeList={dataList}
              addedToPoll={true}
              likes={true}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};
