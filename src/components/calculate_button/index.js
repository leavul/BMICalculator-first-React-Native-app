import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function index({ onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
    );
}