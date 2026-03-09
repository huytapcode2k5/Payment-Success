import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen({ navigation }) {
    return (

        <ImageBackground
            source={require("../Ảnh/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")}
            style={styles.container}
            resizeMode="cover"
        >

            {/* Back button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="chevron-back" size={26} color="#333" />
            </TouchableOpacity>

            {/* Khung scan */}
            <Image
                source={require("../Ảnh/Group 5.png")}
                style={styles.scanFrame}
            />
            <Image
                source={require("../Ảnh/Rectangle 26.png")}
                style={styles.scanArea}
            />
            {/* Thanh sản phẩm */}
            <Image
                source={require("../Ảnh/Group 4.png")}
                style={styles.productBar}
            />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    backButton: {
        position: "absolute",
        top: 60,
        left: 20,
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
    },

    scanFrame: {
        width: 300,
        height: 600,
        resizeMode: "contain",
    },
    scanArea: {
        position: "absolute",
        width: 290,
        height: 250,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ffffff",
        bottom: 210
    },
    productBar: {
        position: "absolute",
        bottom: 5,
        width: "95%",
        height: 300,
        resizeMode: "contain",
    },

}
);