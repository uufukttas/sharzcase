import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
    const city = route.params?.city;
    const [region, setRegion] = useState({
        latitude: city?.latitude || 0,
        longitude: city?.longitude || 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        if (city) {
            setRegion({
                latitude: city.latitude,
                longitude: city.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    }, [city]);

    if (!city) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>No city selected</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
            </MapView>
        </View>
    );
};


export default MapScreen;