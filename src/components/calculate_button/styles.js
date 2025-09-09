import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: theme.borderRadius.small,
        paddingVertical: theme.paddingAndMargin.medium,
        paddingHorizontal: theme.paddingAndMargin.xlarge,
        marginVertical: theme.paddingAndMargin.medium,
        backgroundColor: theme.colors.secondary,
    },
    buttonText: {
        fontFamily: 'Ubuntu Bold',
        color: theme.colors.primary,
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default styles;