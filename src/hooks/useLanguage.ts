import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

// Custom hook for language handling
const useLanguage = () => {
  const { i18n } = useTranslation("common");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client side
  }, []);

  // Language change effect
  useEffect(() => {
    if (i18n.language === "en" || i18n.language === "bn") {
      // Your logic when language changes
      console.log("Language changed to:", i18n.language);
    }
  }, [i18n.language]);

  return isClient;
};

export default useLanguage;
