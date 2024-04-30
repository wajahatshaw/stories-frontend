import 'dotenv/config'

export default {
  expo: {
    name: "fantasticStories",
    slug: "fantasticStories",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.fantasticstories.app",
      infoPlist: {
        UIBackgroundModes: ["audio"],
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.fantasticstories.app",
      permissions: [
        "android.permission.RECORD_AUDIO",
        "android.permission.MODIFY_AUDIO_SETTINGS",
      ],
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "expo-font",
      [
        "expo-av",
        {
          microphonePermission:
            "Allow $(FantasticStories) to access your microphone.",
        },
      ],
    ],
    owner: "fantasticstories",
    extra: {
      eas: {
        projectId: "0d337361-5150-4c77-afcc-64cb98863889",
      },
      BACKEND_URL:
        process.env.APP_ENV === "production"
          ? process.env.PROD_BACKEND_URL
          : process.env.STAGING_BACKEND_URL,
      SQUARE_APP_ID:
        process.env.APP_ENV === "production"
          ? process.env.PROD_SQUARE_APP_ID
          : process.env.STAGING_SQUARE_APP_ID,
    },
  },
};
