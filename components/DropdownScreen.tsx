import React, { useState } from 'react';
import { Button, Modal, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const DropdownScreen = () => {
    const navigation = useNavigation();
    const [selectedCity, setSelectedCity] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const cities = [
        { label: 'Istanbul', value: { latitude: 41.0082, longitude: 28.9784 } },
        { label: 'Ankara', value: { latitude: 39.9334, longitude: 32.8597 } },
        // Add more cities
    ];

    const handleSelectCity = (value) => {
        setSelectedCity(value);
        setModalVisible(false); // Close modal upon selection
        // Delay navigation to ensure state is updated
        setTimeout(() => {
            navigation.navigate('Map', { city: value });
        }, 10);
    };

    return (
        <View style={{ marginTop: 50 }}>
            <Button title="Select a City" onPress={() => setModalVisible(true)} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                        <Picker
                            selectedValue={selectedCity}
                            onValueChange={handleSelectCity}
                            style={{ width: 250 }}
                        >
                            {cities.map(city => (
                                <Picker.Item key={city.label} label={city.label} value={city.value} />
                            ))}
                        </Picker>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default DropdownScreen;
