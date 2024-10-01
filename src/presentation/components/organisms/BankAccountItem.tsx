import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckItem from '../../../../assets/svg/check-item.svg';
import DeleteAccount from '../../../../assets/svg/delete-account.svg';
import {globalFontFamily} from '../../../theme/GlobalStyles';

interface BankAccountItemProps {
  bankName: string;
  accountNumber: string;
  onIconPress: () => void;
}

const BankAccountItem: React.FC<BankAccountItemProps> = ({
  bankName,
  accountNumber,
  onIconPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CheckItem style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.bankName}>{bankName}</Text>
          <Text style={styles.accountNumber}>
            Cuenta: Principal {accountNumber}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onIconPress} style={styles.deleteIcon}>
        <DeleteAccount />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 1, // For Android shadow
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flexDirection: 'column',
  },
  bankName: {
    color: '#000',
    fontFamily: 'Manrope',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  accountNumber: {
    color: '#676F82',
    fontFamily: globalFontFamily.manropeMedium,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  deleteIcon: {
    marginLeft: 'auto',
  },
});

export default BankAccountItem;
