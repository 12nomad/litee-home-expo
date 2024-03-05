import { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { PermissionsAndroid, StyleSheet } from "react-native";
import MapView from "react-native-map-clustering";

import { Text, View } from "./Themed";
import { HouseGeo, Properties } from "@/types/house-geo.type";
import { useRouter } from "expo-router";
import Styles from "@/constants/Styles";
import Colors from "@/constants/Colors";

interface HousesMapProps {
  data: HouseGeo;
}

const INITIAL_REGION: Region = {
  latitude: 46.3011,
  longitude: 6.2267,
  latitudeDelta: 3,
  longitudeDelta: 3,
};

const HousesMap = ({ data }: HousesMapProps) => {
  const router = useRouter();

  const onMarkerPress = (el: Properties) => {
    router.push(`/houses/${el.id}`);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        animationEnabled={false}
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
        }}
        initialRegion={INITIAL_REGION}
        clusterColor={Colors.light.primary}
        clusterTextColor="#000"
        clusterFontFamily="LatoBold"
      >
        {data.features.map((el) => (
          <Marker
            key={el.properties.id}
            coordinate={{
              latitude: +el.properties.latitude,
              longitude: +el.properties.longitude,
            }}
            onPress={() => onMarkerPress(el.properties)}
          >
            <View style={styles.marker}>
              <Text style={[Styles.textBold, styles.markerText]}>
                ${el.properties.price}
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  markerText: { marginVertical: 5, marginHorizontal: 10 },
});

export default HousesMap;
