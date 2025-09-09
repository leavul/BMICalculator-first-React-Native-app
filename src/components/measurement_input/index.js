import { TextInput } from 'react-native';
import style from './style';


export default function index({ onChange, value, placeholder }) {
    return (
        <TextInput
            style={style}
            value={value}
            onChangeText={onChange}
            keyboardType="decimal-pad"
            placeholder={placeholder}
            placeholderTextColor='grey'
            returnKeyType="done"
        />
    );
}