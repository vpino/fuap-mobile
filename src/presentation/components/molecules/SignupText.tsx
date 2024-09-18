import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface SignupTextProps {
  primaryText: string;
  linkText: string;
  navigationRoute: string;
}

const SignupText: React.FC<SignupTextProps> = ({
  primaryText,
  linkText,
  navigationRoute,
}) => {
  const navigation = useNavigation<any>();

  const handleSignupPress = () => {
    navigation.navigate(navigationRoute);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{primaryText}</Text>
      <TouchableOpacity onPress={handleSignupPress}>
        <Text style={styles.signupText}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 24,
  },
  text: {
    color: '#7D7D7D',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 34,
  },
  signupText: {
    color: '#457EFF',
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 34,
    textAlign: 'center',
  },
});

export default SignupText;
