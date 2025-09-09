import { Text } from 'react-native';
import { theme } from "../../constants/theme";

export default function index({ isOn, label }) {

    const style = {
        fontFamily: isOn ? 'Ubuntu Medium' : 'Ubuntu Regular',
        color: isOn ? theme.colors.secondary : theme.colors.thertirey
    }
    return (
        <Text style={style}>{label}</Text>
    );
}