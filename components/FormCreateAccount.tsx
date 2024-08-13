import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";
import { Input, Icon, Button } from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const FormCreateAccount = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.formcreateAccount}>
      <View style={styles.formText}>
        <Text style={[styles.bienvenido, styles.bienvenidoFlexBox]}>
          Crear tu cuenta
        </Text>
        <Text style={[styles.vamosACrear, styles.bienvenidoFlexBox]}>
          Vamos a crear tu cuenta para conectarte a tus prestamos digitales
        </Text>
      </View>
      <View
        style={[styles.formcreateAccountChild, styles.formParentSpaceBlock]}
      />
      <View style={styles.formParentSpaceBlock}>
        <View style={styles.formText}>
          <View style={styles.formText}>
            <Input
              style={[styles.email, styles.emailSpaceBlock]}
              placeholder="Correo electrónico"
              accessoryLeft={<Icon name="Account" pack="material" />}
              placeholderTextColor="rgba(126, 126, 126, 0.6)"
              textStyle={styles.emailTextInputText}
            />
            <Input
              style={[styles.password, styles.emailSpaceBlock]}
              placeholder="Contraseña"
              accessoryLeft={<Icon name="Lock" pack="material" />}
              placeholderTextColor="rgba(126, 126, 126, 0.6)"
              textStyle={styles.passwordTextInputText}
            />
            <Input
              style={[styles.password, styles.emailSpaceBlock]}
              placeholder="Confirma Contraseña"
              accessoryLeft={<Icon name="lock" pack="material" />}
              placeholderTextColor="rgba(126, 126, 126, 0.6)"
              textStyle={styles.confirmPasswordTextInputText}
            />
          </View>
          <Button
            style={[styles.button, styles.buttonFlexBox]}
            title="Inscribirse"
            size="medium"
            status="primary"
            appearance="filled"
            color="#000"
            textStyle={styles.buttonText}
            onPress={() => navigation.navigate("OnboardingStart")}
          >
            Inscribirse
          </Button>
        </View>
        <View style={[styles.frameChild, styles.frameSpaceBlock]} />
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <View style={styles.socialLogindefaultCopyParent}>
            <View style={styles.socialSpaceBlock}>
              <Image
                style={styles.facebookIcon}
                resizeMode="cover"
                source={require("../assets/facebook.png")}
              />
              <Text style={[styles.facebook, styles.facebookTypo]}>Google</Text>
            </View>
            <View
              style={[styles.socialLogindefaultCopy1, styles.socialSpaceBlock]}
            >
              <Image
                style={styles.facebookIcon}
                resizeMode="cover"
                source={require("../assets/facebook1.png")}
              />
              <Text style={styles.facebookTypo}>Facebook</Text>
            </View>
            <View
              style={[styles.socialLogindefaultCopy1, styles.socialSpaceBlock]}
            >
              <Image
                style={styles.facebookIcon}
                resizeMode="cover"
                source={require("../assets/facebook2.png")}
              />
              <Text style={[styles.facebook, styles.facebookTypo]}>Apple</Text>
            </View>
          </View>
        </View>
        <Text style={styles.iAlreadyHaveContainer} numberOfLines={1}>
          <Text style={styles.yaTengoMi}>Ya tengo mi cuenta.</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.login}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTextInputText: {
    fontFamily: "Helvetica",
    color: "rgba(126, 126, 126, 0.6)",
  },
  passwordTextInputText: {
    fontFamily: "Helvetica",
    color: "rgba(126, 126, 126, 0.6)",
  },
  confirmPasswordTextInputText: {
    fontFamily: "Helvetica",
    color: "rgba(126, 126, 126, 0.6)",
  },
  buttonText: {
    fontFamily: "Helvetica",
  },
  bienvenidoFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  formParentSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  emailSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameSpaceBlock: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  facebookTypo: {
    marginTop: 12,
    lineHeight: 28,
    color: Color.colorGray_200,
    fontSize: FontSize.body_size,
    textAlign: "center",
    fontFamily: FontFamily.helvetica,
  },
  socialSpaceBlock: {
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: Padding.p_base,
    flex: 1,
    borderRadius: Border.br_7xs,
    alignItems: "center",
    backgroundColor: Color.colorWhitesmoke_200,
  },
  bienvenido: {
    fontSize: FontSize.header_size,
    lineHeight: 52,
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.slate900,
  },
  vamosACrear: {
    fontSize: FontSize.size_mini,
    lineHeight: 30,
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    color: Color.base700LightTertiary,
    marginTop: 4,
  },
  formText: {
    alignSelf: "stretch",
  },
  formcreateAccountChild: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    borderStyle: "solid",
  },
  email: {
    alignItems: "center",
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
  },
  password: {
    marginTop: 10,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
  },
  button: {
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_sm,
    marginTop: 17,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameChild: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_400,
    borderStyle: "solid",
  },
  facebookIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  facebook: {
    width: 82,
  },
  socialLogindefaultCopy1: {
    marginLeft: 14,
  },
  socialLogindefaultCopyParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  yaTengoMi: {
    color: Color.colorGray_200,
  },
  text: {
    color: Color.colorSlategray_100,
  },
  login: {
    color: Color.accent,
  },
  iAlreadyHaveContainer: {
    lineHeight: 34,
    fontSize: FontSize.body_size,
    marginTop: 40,
    textAlign: "center",
    fontFamily: FontFamily.helvetica,
    alignSelf: "stretch",
  },
  formcreateAccount: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.dominant,
    width: 380,
  },
});

export default FormCreateAccount;
