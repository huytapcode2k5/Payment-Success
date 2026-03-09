import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.hello}>Hello 👋</Text>
                    <Text style={styles.name}>Christie Doe</Text>
                </View>

                <Image
                    source={require("../Ảnh/Mask Group.png")}
                    style={styles.avatar}
                />
            </View>

            {/* Title */}
            <Text style={styles.title}>Your Insights</Text>

            {/* Cards */}
            <View style={styles.grid}>

                {/* Scan */}
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate("Scan")}
                >
                    <Image
                        source={require("../Ảnh/Group 157.png")}
                        style={styles.avatar}
                    />
                    <Text style={styles.cardTitle}>Scan new</Text>
                    <Text style={styles.cardSub}>Scanned 483</Text>
                </TouchableOpacity>

                {/* Counterfeits */}
                <TouchableOpacity style={styles.card}>
                    <Image
                        source={require("../Ảnh/Frame.png")}
                        style={styles.avatar}
                    />
                    <Text style={styles.cardTitle}>Counterfeits</Text>
                    <Text style={styles.cardSub}>Counterfeits 32</Text>
                </TouchableOpacity>

                {/* Success */}
                <TouchableOpacity style={styles.card}>
                    <Image
                        source={require("../Ảnh/Group 158.png")}
                        style={styles.avatar}
                    />
                    <Text style={styles.cardTitle}>Success</Text>
                    <Text style={styles.cardSub}>Checkouts 8</Text>
                </TouchableOpacity>

                {/* Directory */}
                <TouchableOpacity style={styles.card}>
                    <Image
                        source={require("../Ảnh/Group 151.png")}
                        style={styles.avatar}
                    />
                    <Text style={styles.cardTitle}>Directory</Text>
                    <Text style={styles.cardSub}>History 26</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5f6fa",
        padding: 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
    },

    hello: {
        fontSize: 22,
        fontWeight: "600",
    },

    name: {
        color: "gray",
        marginTop: 4,
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 30,
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 20,
    },

    card: {
        width: "48%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
    },

    iconBox: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: "#eef2ff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
    },

    cardSub: {
        color: "gray",
        marginTop: 4,
    }

}
);