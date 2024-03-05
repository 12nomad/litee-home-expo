import { Image, Pressable, StyleSheet, TextInput } from "react-native";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Link, Tabs } from "expo-router";

import Styles from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Text, View } from "@/components/Themed";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function ProfileScreen() {
  const { isSignedIn, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const { user, isLoaded } = useUser();
  const [fullname, setFullname] = useState(user?.fullName);

  useEffect(() => {
    if (user) setFullname(user.fullName);
  }, [isLoaded]);

  const onEditPress = async () => {
    if (!isEditing) return setIsEditing(true);

    if (!fullname || fullname === user?.fullName) return setIsEditing(false);

    const nameSplit = fullname?.split(" ");

    try {
      if (nameSplit.length === 1) {
        await user?.update({
          firstName: nameSplit[0],
        });
      } else if (nameSplit.length > 1) {
        await user?.update({
          firstName: nameSplit[0],
          lastName: nameSplit[1],
        });
      }

      return setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          headerShown: isSignedIn,
          headerTitle: "Personal info",
          headerRight: () => (
            <Pressable style={{ marginRight: 20 }} onPress={onEditPress}>
              {isEditing ? (
                <View style={[Styles.row, { alignItems: "baseline" }]}>
                  <Text>Save</Text>
                  <Feather name="check" />
                </View>
              ) : (
                <View style={[Styles.row, { alignItems: "baseline" }]}>
                  <Text>Edit</Text>
                  <Feather name="edit-2" />
                </View>
              )}
            </Pressable>
          ),
        }}
      />

      {isLoaded && user && (
        <View style={styles.card}>
          <View>
            <Image source={{ uri: user?.imageUrl }} style={styles.image} />
          </View>
          <Text style={styles.email}>
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
          {isEditing ? (
            <TextInput
              value={fullname || ""}
              onChangeText={setFullname}
              style={[Styles.textInput, styles.input]}
            />
          ) : (
            <Text style={styles.name}>{user?.fullName}</Text>
          )}
        </View>
      )}

      {isSignedIn ? (
        <Pressable
          onPress={() => signOut()}
          style={[
            Styles.button,
            { backgroundColor: Colors.light.secondary, marginTop: 20 },
          ]}
        >
          <Text style={Styles.buttonText}>Logout</Text>
        </Pressable>
      ) : (
        <View>
          <Image
            source={require("../../assets/images/travel.png")}
            style={styles.travelImage}
          />

          <Pressable
            style={[
              Styles.button,
              {
                backgroundColor: Colors.light.primary,
                marginTop: 20,
                alignSelf: "center",
              },
            ]}
          >
            <Link href="/(modals)/login">
              <Text style={Styles.buttonText}>Sign in</Text>
            </Link>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  card: {
    paddingTop: 40,
    paddingBottom: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    objectFit: "cover",
  },
  email: {
    ...Styles.textFade,
    fontSize: 12,
    marginVertical: 10,
  },
  name: { fontSize: 16, height: 40, verticalAlign: "middle" },
  input: {
    height: 40,
    width: "60%",
    textAlign: "center",
    borderColor: Colors.light.secondary,
  },
  travelImage: {
    width: 320,
    height: 240,
    alignSelf: "center",
  },
});
