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

  const [documentCount, setDocumentCount] = useState(
    userProfile.documents.length
  );

  const addNewDocument = () => {
    setUserProfile((prevState) => ({
      ...prevState,
      documents: [...prevState.documents, { title: "", file_url: "" }],
    }));
  };

  const removeDocument = (indexToRemove) => {
    setUserProfile((prevState) => ({
      ...prevState,
      documents: prevState.documents.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  const handleEditSaveProfile = () => {
    const areDocumentsValid = userProfile.documents.every(
      (doc) => doc.title && doc.file_url
    );

    if (!areDocumentsValid) {
      alert(
        "Please fill out all document fields or remove empty ones before saving."
      );
      return;
    }

    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={styles.containerSafeArea}>
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
        {isEditing ? (
          <>
            {userProfile.documents.map((doc, index) => (
              <View key={index} style={styles.documentInputGroup}>
                <View style={styles.documentInputContainer}>
                  <TextInput
                    placeholder="Document Title"
                    value={doc.title}
                    style={[styles.input, styles.documentInput]}
                    onChangeText={(text) => {
                      const newDocs = [...userProfile.documents];
                      newDocs[index].title = text;
                      setUserProfile({ ...userProfile, documents: newDocs });
                    }}
                  />
                  <TextInput
                    placeholder="Document URL"
                    value={doc.file_url}
                    style={[styles.input, styles.documentInput]}
                    onChangeText={(text) => {
                      const newDocs = [...userProfile.documents];
                      newDocs[index].file_url = text;
                      setUserProfile({ ...userProfile, documents: newDocs });
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => removeDocument(index)}
                  style={styles.roundRemoveButton}
                >
                  <Text style={styles.removeButtonText}>X</Text>
                  {/* Kalau sempet ganti Icon */}
                </TouchableOpacity>
              </View>
            ))}
            <Button
              text="Add More Documents"
              onPress={addNewDocument}
              style={styles.addButton}
            />
          </>
        ) : (
          userProfile.documents.map((doc, index) => (
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
          ))
        )}

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

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainerStyle: {
    padding: 30,
    backgroundColor: "white",
    paddingBottom: 40,
    borderRadius: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    fontFamily: "Lato-Regular",
    color: "#333",
  },
  fieldTitle: {
    fontWeight: "bold",
    marginTop: 15,
    fontFamily: "Lato-Bold",
    color: "#6b9ebf",
  },
  input: {
    height: 40,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    padding: 8,
    backgroundColor: "#F5F5F5",
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#E0E0E0",
  },
  documentInputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  documentInputContainer: {
    flex: 1,
  },
  documentInput: {
    marginVertical: 5,
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
  },
  documentIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 140,
    height: 140,
    marginTop: 30,
    resizeMode: "cover",
    borderRadius: 70,
  },
  editButton: {
    backgroundColor: "#6b9ebf",
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
  documentInputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  documentInput: {
    flex: 1,
    marginEnd: 5,
    marginStart: 5,
  },
  roundRemoveButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    borderRadius: 15,
    marginLeft: 10,
  },
  removeButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#0e365c",
    marginTop: 10,
    borderRadius: 8,
    padding: 10,
  },

  saveButton: {
    backgroundColor: "#6b9ebf",
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
  logoutButton: {
    backgroundColor: "#8B0000",
    marginTop: 20,
    borderRadius: 8,
    padding: 10,
  },
});
