import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import CalculateButton from '../src/components/calculate_button';
import MeasurementInput from '../src/components/measurement_input';
import ResetButton from '../src/components/reset_button';
import UnitLabel from '../src/components/unit_label';
import UnitSwitch from '../src/components/unit_switch';
import { theme } from '../src/constants/theme';

export default function Index() {
  useFonts({
    'Ubuntu Regular': require('../src/assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu Medium': require('../src/assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu Bold': require('../src/assets/fonts/Ubuntu-Bold.ttf'),
  });

  const [isImperial, setIsImperial] = useState(false);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) return 'Normal weight';
    else if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    else return 'Obesity';
  }

  const calcluateBmi = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      Alert.alert('Please enter valid positive numbers for weight and height.');
      return;
    }

    let bmi;
    if (isImperial) {
      // Imperial BMI calculation
      bmi = (weightNum / (heightNum * heightNum)) * 703;

    } else {
      // Metric BMI calculation
      const heightInMeters = heightNum / 100; // Convert cm to meters
      bmi = weightNum / (heightInMeters * heightInMeters);

    }

    Alert.alert(`Your BMI is ${bmi.toFixed(2)}, which is considered ${getBmiCategory(bmi)}.`);

  }

  const resetInputs = () => {
    setWeight('');
    setHeight('');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.cardView}>
        <View style={styles.unitSection}>
          <UnitLabel isOn={!isImperial} label={'Metric'} />
          <UnitSwitch value={isImperial} onValueChange={() => setIsImperial(value => !value)} />
          <UnitLabel isOn={isImperial} label={'Imperial'} />
        </View>

        <Text style={styles.measurementTitle}>Weight ({isImperial ? 'lbs' : 'kg'})</Text>
        <MeasurementInput onChange={setWeight} value={weight} placeholder={isImperial ? 'Enter weight in lbs' : 'Enter weight in kg'} />

        <Text style={styles.measurementTitle}>Height ({isImperial ? 'inches' : 'cm'})</Text>
        <MeasurementInput onChange={setHeight} value={height} placeholder={isImperial ? 'Enter height in inches' : 'Enter height in cm'} />

        <View style={styles.buttonsSection}>
          <CalculateButton onPress={calcluateBmi} />

          <ResetButton onPress={resetInputs} />
        </View>
      </View>
    </KeyboardAvoidingView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.paddingAndMargin.xlarge,
  },
  cardView: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.colors.primary,
    borderWidth: theme.borderWidth,
    borderRadius: theme.borderRadius.medium,
    borderColor: theme.colors.borderColor,
    paddingVertical: theme.paddingAndMargin.xlarge,
    paddingHorizontal: theme.paddingAndMargin.xlarge,
  },
  unitSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    gap: theme.gap.small,
    paddingBottom: theme.paddingAndMargin.medium,
  },
  measurementTitle: {
    fontWeight: '500',
    fontFamily: 'Ubuntu Medium',
  },
  buttonsSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.gap.large,
  }
})
