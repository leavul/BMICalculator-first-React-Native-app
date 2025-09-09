import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.borderRadius.small,
        paddingVertical: theme.paddingAndMargin.medium,
        paddingHorizontal: theme.paddingAndMargin.xlarge,
        marginVertical: theme.paddingAndMargin.medium,
        borderWidth: theme.borderWidth,
        borderColor: theme.colors.borderColor,
        backgroundColor: theme.colors.primary,
    },
    buttonText: {
        fontFamily: 'Ubuntu Bold',
        color: theme.colors.secondary,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default styles;