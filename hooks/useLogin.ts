import { useRouter } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";

import { useWarmUpBrowser } from "./useWarnUpBrowser";
import { Strategy } from "@/enums/strategy.enum";

const useLogin = () => {
  useWarmUpBrowser();

  const router = useRouter();
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

  const onSelectAuth = async (strategy: Strategy) => {
    const auth = {
      [Strategy.FACEBOOK]: facebookAuth,
      [Strategy.GOOGLE]: googleAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await auth();

      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
        router.push("/(tabs)");
      }
    } catch (error) {
      console.error("Auth error: ", error);
    }
  };

  return { onSelectAuth };
};

export default useLogin;
