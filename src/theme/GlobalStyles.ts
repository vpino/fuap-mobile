import {StyleSheet} from 'react-native';

/* fonts */
export const globalFontFamily = {
  interRegular: 'Inter-Regular',
  manropeRegular: 'Manrope-Regular',
  manropeBold: 'Manrope-Bold',
  helveticaNeue: 'Helvetica Neue',
  helvetica: 'Helvetica',
  noirPro: 'Noir Pro',
  manropeSemiBold: 'Manrope-SemiBold',
  manropeMedium: 'Manrope-Medium',
  interMedium: 'Inter-Medium',
  interLight: 'Inter-Light',
  interSemiBold: 'Inter-SemiBold',
  manropeLight: 'Manrope-Light',
  manropeExtraLight: 'Manrope-ExtraLight',
};
/* font sizes */
export const globalFontSize = {
  interSemiBold_size: 16,
  interMedium_size: 14,
  manropeBold_size: 32,
  size_xl: 20,
  interRegular_size: 12,
  size_5xs_5: 8,
  size_sm_5: 14,
  size_3xs: 10,
  body_size: 18,
  size_mini: 15,
  size_smi: 13,
};
/* Colors */
export const globalColors = {
  secondary: '#fff',
  primary: '#000',
  background: '#fff',
  gray3: '#828282',
  colorGray_100: '#808080',
  colorGray_200: '#7d7d7d',
  colorGray_300: '#1a1a1a',
  slate900: '#0f172a',
  colorGray_400: 'rgba(15, 23, 42, 0.5)',
  colorsBlack80: 'rgba(0, 0, 0, 0.8)',
  colorGray_500: 'rgba(15, 23, 42, 0.7)',
  colorGray_600: 'rgba(15, 23, 42, 0.8)',
  colorGray_700: 'rgba(0, 0, 0, 0.5)',
  base700LightTertiary: 'rgba(26, 26, 26, 0.7)',
  colorGray_800: 'rgba(130, 130, 130, 0.2)',
  darkGray: '#334158',
  gray1: '#333',
  colorMediumslateblue: '#005ff9',
  gray: '#676f82',
  colorSlategray_100: '#576074',
  colorWhitesmoke_100: '#f8f8fa',
  colorWhitesmoke_200: '#f8f8f8',
  colorWhitesmoke_300: '#f3f3f3',
  gray6: '#f2f2f2',
  colorWhitesmoke_400: '#ececec',
  colorLavender: '#e0e8ff',
  confirm: '#16ae65',
  green1: '#219653',
  slate100: '#f1f5f9',
  colorAliceblue_100: '#e2e8f0',
  tertiaryGray400Light: '#a1a1aa',
  lightBorder: '#e2e4ea',
  accent: '#457eff',
  lightBackground: '#f3f6fd',
  colorGhostwhite_100: 'rgba(243, 246, 253, 0.55)',
  error: '#f4485d',
  colorCornflowerblue: '#3f8cec',
  colorTomato: '#f14336',
  colorGrey: '#b6b6b6',
  colorPlaceholder: 'rgba(126, 126, 126, 0.60)',
};
/* Style Variables */
export const StyleVariable = {
  defaultBorderRaius: 4,
};
/* Paddings */
export const globalPadding = {
  p_9xl: 28,
  p_sm: 14,
  p_3xs: 10,
  p_9xs: 4,
  p_5xs: 8,
  p_5xl: 24,
  p_base: 16,
  p_xs: 12,
  p_11xs: 2,
  p_xl: 20,
  p_7xs: 6,
  p_6xl: 25,
};
/* border radiuses */
export const globalBorder = {
  br_7xs: 6,
  br_9xs: 4,
  br_81xl: 100,
  br_9xl: 28,
  br_xs: 12,
  br_base: 16,
  br_2xs_8: 11,
  br_5xs: 8,
  br_61xl: 80,
  br_11xs: 2,
  br_12xs_2: 0,
};

export const globalStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: globalColors.secondary,
    // paddingBottom: 60,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.secondary,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '40%',
    marginTop: 10,
  },

  textPrimaryButton: {
    color: globalColors.secondary,
    fontFamily: globalFontFamily.helvetica,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
  },

  input: {
    color: 'rgba(126, 126, 126, 0.60)',
    backgroundColor: globalColors.colorWhitesmoke_200,
    borderRadius: 4,
    fontFamily: globalFontFamily.helvetica,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.15,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  containerCountrySelect: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 15,
  },
  selectCountryText: {
    overflow: 'hidden',
    color: 'rgba(26, 26, 26, 0.70)',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    height: 55,
  },
  dropdownStyle: {
    maxHeight: 100,
    paddingRight: 24,
  },
  searchStyle: {
    paddingRight: 10,
  },
  inputSelect: {
    marginTop: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
    height: 55,
    alignItems: 'center',
  },
  dropDownStyleSelect: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(130, 130, 130, 0.20)',
  },
  statusPending: {
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },
  statusCompleted: {
    borderWidth: 1,
    borderColor: '#16AE65',
    color: '#16AE65',
    backgroundColor: 'rgba(22, 174, 101, 0.10)',
  },
  statusFailed: {
    color: '#F4485D',
    borderWidth: 1,
    borderColor: '#F4485D',
    backgroundColor: 'rgba(244, 72, 93, 0.10)',
  },
  statusCompletedPending: {
    color: '#333',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontWeight: '400',
  },
  statusCompletedText: {
    color: '#16AE65',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontWeight: '400',
  },
  statusFailedText: {
    color: '#F4485D',
    fontFamily: globalFontFamily.interMedium,
    fontSize: 12,
    fontWeight: '400',
  },
});
