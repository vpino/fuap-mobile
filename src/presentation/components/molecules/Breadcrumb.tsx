import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ArrowIcon from '../../../../assets/svg/arrow.svg';
import {SvgProps} from 'react-native-svg';
import {globalFontFamily} from '../../../theme/GlobalStyles';
import HomeIcon from '../../../../assets/svg/home.svg';
import AppsIcon from '../../../../assets/svg/apps.svg';
import CreateAccountIcon from '../../../../assets/svg/create-account.svg';
interface BreadcrumbItem {
  icon: React.FC<SvgProps>;
  text: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const BreadcrumbItem = ({
  icon: IconSvg,
  text,
  isLast,
}: BreadcrumbItem & {isLast: boolean}) => (
  <View style={styles.itemContainer}>
    <IconSvg />
    <Text style={styles.itemText}>{text}</Text>
    {!isLast && <ArrowIcon style={styles.arrow} />}
  </View>
);

export default function Breadcrumb({items}: BreadcrumbProps) {
  const breadcrumbItems = [
    {icon: HomeIcon, text: 'Home'},
    {icon: AppsIcon, text: 'Aplicaciones'},
    {icon: CreateAccountIcon, text: 'Crear Cuenta'},
  ];

  items = items ?? breadcrumbItems;

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          icon={item.icon}
          text={item.text}
          isLast={index === items.length - 1}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F8F8FA',
    marginVertical: 10,
    alignSelf: 'flex-start', // Esto permite que el contenedor ocupe solo el ancho del contenido
    paddingHorizontal: 8, // Ajusta el padding horizontal si es necesario
    height: 36,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: '#000',
    fontFamily: globalFontFamily.interLight,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 4,
    marginRight: 4,
  },
  arrow: {
    marginHorizontal: 10,
  },
});
