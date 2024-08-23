import React from 'react';
import { View, StyleSheet } from 'react-native';
import SocialCard from '../molecules/SocialCard';

interface ListSocialCardProps {
  items: { label: string; imagenSVG: React.FC<any> }[];
}

const ListSocialCard: React.FC<ListSocialCardProps> = ({ items }) => {
  return (
    <View style={styles.listContainer}>
      {items.map((item, index) => (
        <SocialCard key={index} label={item.label} imagenSVG={item.imagenSVG} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default ListSocialCard;
