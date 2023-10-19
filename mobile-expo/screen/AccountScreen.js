import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  TextInput,
} from "react-native";
import { useAuth } from "../navigators/Authcontext";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";

import profileImage from "../assets/dummy/hero-dummy.jpg";

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

  return (
    <ScrollView style={styles.contentContainerStyle}>
      <View style={styles.imageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <TouchableOpacity
          style={styles.editTextContainer}
          onPress={handleEditSaveProfile}
        >
          <Text style={styles.editText}>
            {isEditing ? "Save" : "Edit Profile"}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Name: {userProfile.name}</Text>

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
      {userProfile.documents.map((doc, index) => (
        <View key={index} style={styles.container}>
          <Text onPress={() => Linking.openURL(doc.file_url)}>{doc.title}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.containerButton}>
        <Button text="Logout" onPress={handleLogout} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 23,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  fieldTitle: {
    fontWeight: "600",
    marginTop: 15,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "E0E0E0",
    // borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    justifyContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#E0E0E0",
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
    backgroundColor: "#8B0000", // merah gelap
    padding: 10,
    borderRadius: 15,
  },
  editText: {
    color: "#FFF",
    fontSize: 12,
  },
  containerButton: {
    marginTop: 30,
    backgroundColor: "#8B0000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});
