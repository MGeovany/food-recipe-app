import React from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import { styles } from "../styles";

export const EditProfileForm = () => {
  const initialValues = {
    name: "",
    lastName: "",
    age: "",
  };

  const handleSubmitForm = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("age")}
            onBlur={handleBlur("age")}
            value={values.age}
            placeholder="ID de hogar"
            placeholderTextColor="#B1B6BB"
            style={styles.inputForm}
          />
          <TextInput
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Nombre"
            placeholderTextColor="#B1B6BB"
            style={styles.inputForm}
          />
          <TextInput
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            value={values.lastName}
            placeholder="Apellido"
            placeholderTextColor="#B1B6BB"
            style={styles.inputForm}
          />
          <TextInput
            onChangeText={handleChange("age")}
            onBlur={handleBlur("age")}
            value={values.age}
            placeholder="Edad"
            placeholderTextColor="#B1B6BB"
            style={styles.inputForm}
          />

          <Pressable onPress={handleSubmit}>
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
                Guardar Cambios
              </Text>
            </View>
          </Pressable>
          <Pressable>
            <Text
              style={{
                fontFamily: "poppins-regular",
                fontWeight: "bold",
                paddingLeft: "12px",
                color: "#BBBABD",
                marginVertical: "1rem",
                alignSelf: "center",
              }}
            >
              Salir sin guardar
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};
