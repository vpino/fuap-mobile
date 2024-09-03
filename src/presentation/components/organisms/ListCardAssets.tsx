import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CardAsset, {CardAssetProps} from '../molecules/CardAsset';

interface ListCardAssetsProps {
  data: CardAssetProps[];
  onSelectedItemsChange?: (selectedItems: string[]) => void;
}

const ListCardAssets: React.FC<ListCardAssetsProps> = ({
  data,
  onSelectedItemsChange,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemPress = (item: CardAssetProps) => {
    const isSelected = selectedItems.includes(item.label ?? '');
    let updatedSelectedItems;

    if (isSelected) {
      updatedSelectedItems = selectedItems.filter(
        selectedItem => selectedItem !== item.label,
      );
    } else {
      updatedSelectedItems = [...selectedItems, item.label ?? ''];
    }

    setSelectedItems(updatedSelectedItems);

    if (onSelectedItemsChange) {
      onSelectedItemsChange(updatedSelectedItems);
    }
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <CardAsset
          key={index}
          icon={item.icon}
          label={item.label}
          containerStyle={styles.card}
          textStyle={item.textStyle}
          onPress={() => handleItemPress(item)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  row: {},
  card: {
    marginBottom: 12,
  },
});

export default ListCardAssets;
