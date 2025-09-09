import { Switch } from "react-native";
import { theme } from "../../constants/theme";
import style from "./style";

export default function index({ value, onValueChange }) {
    return (
        <Switch
            value={value}
            onValueChange={onValueChange}
            style={style}
            trackColor={{
                true: theme.colors.secondary,
                false: theme.colors.secondary
            }}
            thumbColor={theme.colors.primary}
            ios_backgroundColor={theme.colors.secondary}
        />
    );
}