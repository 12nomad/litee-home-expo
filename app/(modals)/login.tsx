import { TextInput, Pressable } from "react-native";

import Styles from "@/constants/Styles";
import Colors from "@/constants/Colors";
import BrandButton from "@/components/BrandButton";
import useLogin from "@/hooks/useLogin";
import { Text, View } from "@/components/Themed";
import { Strategy } from "@/enums/strategy.enum";
import { loginStyles } from "@/styles/login.style";

export default function LoginModal() {
  const { onSelectAuth } = useLogin();

  return (
    <View style={loginStyles.container}>
      <Text>Login with e-mail: </Text>
      <TextInput
        placeholder="e-mail..."
        autoCapitalize="none"
        style={[{ marginTop: 10 }, Styles.textInput]}
      />
      <Pressable
        style={[
          { marginTop: 20 },
          Styles.button,
          { backgroundColor: Colors.light.primary },
        ]}
      >
        <Text style={Styles.buttonText}>Continue</Text>
      </Pressable>

      <View style={loginStyles.separatorView}>
        <View style={loginStyles.separatorViewLine}></View>
        <Text style={loginStyles.separatorViewText}>or</Text>
        <View style={loginStyles.separatorViewLine}></View>
      </View>

      <View style={loginStyles.buttonContainer}>
        <BrandButton
          title="Continue with Google"
          icon="google"
          strategy={Strategy.GOOGLE}
          onSelectAuth={onSelectAuth}
        />
        <BrandButton
          title="Continue with Facebook"
          icon="facebook"
          strategy={Strategy.FACEBOOK}
          onSelectAuth={onSelectAuth}
        />
      </View>
    </View>
  );
}
