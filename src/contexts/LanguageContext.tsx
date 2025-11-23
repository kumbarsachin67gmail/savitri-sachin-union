import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "kn";

export interface Translations {
  // Navigation
  navHome: string;
  navCouple: string;
  navStory: string;
  navEvents: string;
  navGallery: string;
  navTravel: string;
  navWishes: string;
  navRSVP: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  viewInvitation: string;

  // Couple Section
  theCouple: string;
  theCoupleSubtitle: string;
  savitriQuote: string;
  sachinQuote: string;

  // Our Story
  ourStory: string;
  storyIntro: string;
  storyContent: string;

  // Modal
  modalTitle: string;
  modalSubtitle: string;
  weddingDate: string;
  weddingDay: string;
  venueName: string;
  venueAddress: string;
  venueAddressLine2: string;
  storyQuote: string;
  viewMap: string;
  close: string;

  // Language Toggle
  languageName: string;
}

const englishTranslations: Translations = {
  navHome: "Home",
  navCouple: "The Couple",
  navStory: "Our Story",
  navEvents: "Events",
  navGallery: "Gallery",
  navTravel: "Travel",
  navWishes: "Wishes",
  navRSVP: "RSVP",
  heroTitle: "Savitri ❤️ Sachin",
  heroSubtitle:
    "Together with our families, we invite you to celebrate our union",
  heroTagline:
    '"What started as an arrangement became a beautiful journey of companionship."',
  viewInvitation: "View Invitation",
  theCouple: "The Couple",
  theCoupleSubtitle:
    '"Two paths chosen by families, one future chosen by hearts"',
  savitriQuote: '"A woman of strength, patience and warmth"',
  sachinQuote: '"A man driven by passion, responsibility and care"',
  ourStory: "Our Story",
  storyIntro: "How we found our forever",
  storyContent:
    "What began as a beautiful arrangement cherished by our families grew into a deep companionship that honored tradition while nurturing real love and understanding.",
  modalTitle: "Savitri ❤️ Sachin",
  modalSubtitle:
    "Together with our families, we invite you to celebrate our union",
  weddingDate: "8th February, 2026",
  weddingDay: "Saturday",
  venueName: "Mangala Karyalaya",
  venueAddress: "Vijayapur–Sindagi Road, Sindagi",
  venueAddressLine2: "Vijayapur (Bijapur) District, Karnataka – 586128",
  storyQuote:
    '"What started as an arrangement became a beautiful journey of companionship."',
  viewMap: "View On Map",
  close: "Close",
  languageName: "ಕನ್ನಡ",
};

const kannadaTranslations: Translations = {
  navHome: "ಮುಖ್ಯ",
  navCouple: "ದಂಪತಿ",
  navStory: "ನಮ್ಮ ಕಥೆ",
  navEvents: "ಸಂಭ್ರಮಗಳು",
  navGallery: "ಚಿತ್ರಗಳು",
  navTravel: "ಪ್ರಯಾಣ",
  navWishes: "ಆಶೀರ್ವಾದಗಳು",
  navRSVP: "ಪ್ರತಿಕ್ರಿಯೆ",
  heroTitle: "ಸವಿತ್ರಿ ❤️ ಸಚಿನ್",
  heroSubtitle:
    "ನಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ, ನಮ್ಮ ಸಂಯೋಗವನ್ನು ಆಚರಿಸಲು ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
  heroTagline: '"ವ್ಯವಸ್ಥೆಯಿಂದ ಪ್ರಾರಂಭವಾದದ್ದು ಅದ್ಭುತ ಸಂಬಂಧದ ಪ್ರಯಾಣವಾಯಿತು."',
  viewInvitation: "ಆಹ್ವಾನವನ್ನು ವೀಕ್ಷಿಸಿ",
  theCouple: "ದಂಪತಿ",
  theCoupleSubtitle:
    '"ಕುಟುಂಬಗಳು ಆಯ್ಕೆ ಮಾಡಿದ ಎರಡು ಮಾರ್ಗಗಳು, ಹೃದಯಗಳು ಆಯ್ಕೆ ಮಾಡಿದ ಒಂದೇ ಭವಿಷ್ಯ"',
  savitriQuote: '"ಬಲ, ತಾಳ್ಮೆ ಮತ್ತು ಸೌಂದರ್ಯದ ಮಹಿಳೆ"',
  sachinQuote: '"ಉತ್ಸಾಹ, ಜವಾಬ್ದಾರಿ ಮತ್ತು ಪ್ರೀತಿಯಿಂದ ನಿರ್ದೇಶಿತ ಪುರುಷ"',
  ourStory: "ನಮ್ಮ ಕಥೆ",
  storyIntro: "ನಾವು ನಮ್ಮ ಯಾವವವನ್ನು ಹೇಗೆ ಕಂಡುಕೊಂಡೆವು",
  storyContent:
    "ನಮ್ಮ ಕುಟುಂಬಗಳಿಂದ ಗೌರವಿಸಿದ ಸುಂದರ ವ್ಯವಸ್ಥೆಯಿಂದ ಪ್ರಾರಂಭವಾದದ್ದು, ಸಂಪ್ರದಾಯವನ್ನು ಗೌರವಿಸುವಾಗ ನಿಜವಾದ ಪ್ರೀತಿ ಮತ್ತು ಅರ್ಥವನ್ನು ಪೋಷಿಸುವ ಆಳವಾದ ಸಹವಾಸವಾಯಿತು.",
  modalTitle: "ಸವಿತ್ರಿ ❤️ ಸಚಿನ್",
  modalSubtitle:
    "ನಮ್ಮ ಕುಟುಂಬಗಳೊಂದಿಗೆ, ನಮ್ಮ ಸಂಯೋಗವನ್ನು ಆಚರಿಸಲು ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
  weddingDate: "8 ಫೆಬ್ರವರಿ, 2026",
  weddingDay: "ಶನಿವಾರ",
  venueName: "ಮಂಗಳ ಕಾರ್ಯಾಲಯ",
  venueAddress: "ವಿಜಯಪುರ-ಸಿಂಧಗಿ ರಸ್ತೆ, ಸಿಂಧಗಿ",
  venueAddressLine2: "ವಿಜಯಪುರ (ಬೀಜಾಪುರ) ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ - 586128",
  storyQuote: '"ವ್ಯವಸ್ಥೆಯಿಂದ ಪ್ರಾರಂಭವಾದದ್ದು ಅದ್ಭುತ ಸಂಬಂಧದ ಪ್ರಯಾಣವಾಯಿತು."',
  viewMap: "ನಕ್ಷೆಯಲ್ಲಿ ವೀಕ್ಷಿಸಿ",
  close: "ಮುಚ್ಚಿ",
  languageName: "EN",
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "en" ? "kn" : "en";
      console.log("Language toggled from", prev, "to", newLanguage);
      return newLanguage;
    });
  };

  const t = language === "en" ? englishTranslations : kannadaTranslations;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
