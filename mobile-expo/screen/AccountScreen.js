import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../navigators/Authcontext";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import * as Font from "expo-font";

import profileImage from "../assets/dummy/hero-dummy.jpg";
import pdfIcon from "../assets/icons/pdf.png";
import imageIcon from "../assets/icons/images.png";

export default function AccountScreen() {
  const { logout } = useAuth();
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "Riska",
    email: "riska@gmail.com",
    role: "student",
    phone: "10239123012",
    address: "Jalan jalan jalan",
    documents: [
      {
        title: "Curicullum Vitae Riska",
        file_url:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      },
      {
        title: "Curicullum Vitae Riska 2",
        file_url: "https://dummyimage.com/600x400/000/fff.jpeg",
      },
    ],
  });

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  const handleEditSaveProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (field, value) => {
    setUserProfile({
      ...userProfile,
      [field]: value,
    });
  };

  const renderDocumentIcon = (url) => {
    if (url.endsWith(".pdf")) {
      return pdfIcon;
    } else if (
      url.endsWith(".jpeg") ||
      url.endsWith(".jpg") ||
      url.endsWith(".png")
    ) {
      return imageIcon;
    }
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={styles.contentContainerStyle}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.username}>{userProfile.name}</Text>
        </View>

        <Text style={styles.fieldTitle}>Email:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.email}
            onChangeText={(text) => handleChange("email", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{userProfile.email}</Text>
          </View>
        )}

        <Text style={styles.fieldTitle}>Role:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.role}
            onChangeText={(text) => handleChange("role", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{userProfile.role}</Text>
          </View>
        )}

        <Text style={styles.fieldTitle}>Phone:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.phone}
            onChangeText={(text) => handleChange("phone", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{userProfile.phone}</Text>
          </View>
        )}

        <Text style={styles.fieldTitle}>Address:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={userProfile.address}
            onChangeText={(text) => handleChange("address", text)}
          />
        ) : (
          <View style={styles.container}>
            <Text>{userProfile.address}</Text>
          </View>
        )}

        <Text style={styles.fieldTitle}>Documents:</Text>
        {isEditing
          ? userProfile.documents.map((doc, index) => (
              <View key={index} style={styles.documentInputContainer}>
                <TextInput
                  placeholder="Document Title"
                  value={doc.title}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Document URL"
                  value={doc.file_url}
                  style={styles.input}
                />
              </View>
            ))
          : userProfile.documents.map((doc, index) => (
              <TouchableOpacity
                key={index}
                style={styles.documentContainer}
                onPress={() => Linking.openURL(doc.file_url)}
              >
                <Image
                  source={renderDocumentIcon(doc.file_url)}
                  style={styles.documentIcon}
                />
                <Text>{doc.title}</Text>
              </TouchableOpacity>
            ))}

        <Button
          text={isEditing ? "Save" : "Edit Profile"}
          onPress={handleEditSaveProfile}
          style={isEditing ? styles.saveButton : styles.editButton}
        />
        {!isEditing && (
          <Button
            text="Logout"
            onPress={handleLogout}
            style={styles.logoutButton}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
Font.loadAsync({
  CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 20,
    backgroundColor: "white",
    paddingBottom: 100,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    fontFamily: "CustomFont"
  },
  fieldTitle: {
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: "CustomFont"
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "E0E0E0",
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#E0E0E0",
  },
  documentInputContainer: {
    marginBottom: 15,
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  documentIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 75,
    marginBottom: 10,
  },
  editTextContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    fontFamily: "CustomFont"
  },
  editButton: {
    backgroundColor: "#B0B0B0",
  },
  saveButton: {
    backgroundColor: "#32CD32",
  },
  logoutButton: {
    backgroundColor: "#8B0000",
  },
  editText: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
    fontFamily: "CustomFont"
  },
});
