import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import EditBoxIcon from '../../../../assets/svg/edit-box-fill.svg';

interface ProfileEditDetailProps {
  title: string;
  subTtitle: string;
  description: string;
  onSvgPress?: () => any;
}

const ProfileEditDetail: React.FC<ProfileEditDetailProps> = ({
  title,
  subTtitle,
  description,
  onSvgPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTtitle}>{subTtitle}</Text>
        <TouchableOpacity onPress={onSvgPress}>
          <EditBoxIcon style={styles.svgIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginBottom: 35,
  },
  title: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  subTtitle: {
    color: '#676F82',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  description: {
    color: '#676F82',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    marginRight: 8,
  },
  svgIcon: {
    // Asegúrate de ajustar el tamaño del SVG si es necesario
  },
});

export default ProfileEditDetail;
