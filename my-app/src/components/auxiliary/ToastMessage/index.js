import React, { useEffect } from "react";
import Toast from "react-native-toast-message";

export default function ToastMessage({ type, text1, text2 }) {
  function configToast() {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      visibilityTime: 5000,
      position: "bottom",
      bottomOffset: 0,
      text1Style: { fontSize: 16 },
      text2Style: { fontSize: 14 },
    });
  }

  useEffect(() => {
    configToast();
  }, []);

  return <Toast />;
}
