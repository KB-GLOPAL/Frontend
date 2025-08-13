import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        
        if (!mounted) return;
        router.replace("/login");
      } finally {
        await SplashScreen.hideAsync();
      }
    })();
    return () => { mounted = false; };
  }, []);

  return null;
}
