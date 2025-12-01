import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "sw";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    menu: "Menu",
    gallery: "Gallery",
    contact: "Contact",
    orderNow: "Order Now",
    
    // Home Page
    foodOfTheDay: "Food of the Day",
    welcomeTitle: "Welcome to ClockTowerCafe",
    welcomeText: "Experience the perfect blend of great coffee, delicious food, and warm hospitality. At ClockTowerCafe, every cup is crafted with passion, and every dish is made with the finest ingredients. Join us for breakfast, lunch, or just a coffee break – we're here to make your day brighter!",
    viewFullMenu: "View Full Menu",
    orderOnWhatsApp: "Order on WhatsApp",
    featuredMenu: "Featured Menu",
    featuredMenuSubtext: "Discover our most popular items",
    seeAllMenuItems: "See All Menu Items",
    
    // About Page
    ourStory: "Our Story",
    ourStoryText: "ClockTowerCafe was born from a passion for great coffee and a love for bringing people together. Located in the heart of Dar es Salaam, we've been serving our community with pride since our doors first opened. Our journey began with a simple mission: to create a welcoming space where everyone can enjoy exceptional coffee and delicious food in a warm, friendly atmosphere.",
    ourMission: "Our Mission",
    ourMissionText: "We are committed to serving the finest coffee and food while creating a community hub where friends meet, ideas flourish, and memories are made. Every cup we serve and every dish we prepare is a testament to our dedication to quality and customer satisfaction.",
    ourValues: "Our Values",
    quality: "Quality",
    qualityText: "We source the finest ingredients and use traditional brewing methods to ensure every cup meets our high standards.",
    community: "Community",
    communityText: "We believe in giving back and being an active, positive presence in our local community.",
    sustainability: "Sustainability",
    sustainabilityText: "We're committed to environmentally friendly practices, from sourcing to serving.",
    whatPeopleSay: "What People Say About Us",
    
    // Menu Page
    menuTitle: "ClockTowerCafe Menu",
    menuSubtitle: "Explore our carefully crafted selection of coffee, food, and treats",
    all: "All",
    noItems: "No items found in this category.",
    readyToOrder: "Ready to Order?",
    readyToOrderText: "Place your order via WhatsApp and we'll have it ready for you!",
    
    // Gallery Page
    galleryTitle: "Our Gallery",
    gallerySubtitle: "Take a visual journey through ClockTowerCafe",
    
    // Contact Page
    contactTitle: "Get in Touch",
    contactSubtitle: "We'd love to hear from you! Send us a message or visit us at our location.",
    name: "Name",
    email: "Email",
    message: "Message",
    quantity: "Quantity (Optional)",
    sendMessage: "Send Message",
    visitUs: "Visit Us",
    hours: "Hours",
    phone: "Phone",
    
    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    
    // Days
    monday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    mondayHours: "7:00 AM - 10:00 PM",
    saturdayHours: "8:00 AM - 11:00 PM",
    sundayHours: "8:00 AM - 9:00 PM",
  },
  sw: {
    // Navigation
    home: "Nyumbani",
    about: "Kuhusu Sisi",
    menu: "Menyu",
    gallery: "Picha",
    contact: "Wasiliana",
    orderNow: "Agiza Sasa",
    
    // Home Page
    foodOfTheDay: "Chakula cha Leo",
    welcomeTitle: "Karibu ClockTowerCafe",
    welcomeText: "Furahia mchanganyiko kamili wa kahawa nzuri, chakula kitamu, na ukarimu wa joto. Katika ClockTowerCafe, kila kikombe kinaandaliwa kwa shauku, na kila sahani inatengenezwa kwa viungo bora zaidi. Jiunge nasi kwa chakula cha asubuhi, chakula cha mchana, au mapumziko ya kahawa tu – tuko hapa ili kufanya siku yako kuwa nzuri zaidi!",
    viewFullMenu: "Tazama Menyu Kamili",
    orderOnWhatsApp: "Agiza Kupitia WhatsApp",
    featuredMenu: "Menyu Maarufu",
    featuredMenuSubtext: "Gundua vyakula vyetu vinavyopendwa zaidi",
    seeAllMenuItems: "Tazama Vyakula Vyote",
    
    // About Page
    ourStory: "Hadithi Yetu",
    ourStoryText: "ClockTowerCafe ilizaliwa kutokana na shauku ya kahawa nzuri na upendo wa kuwaleta watu pamoja. Iko katika moyo wa Dar es Salaam, tumekuwa tukihudumia jamii yetu kwa kiburi tangu milango yetu ilifunguliwa mara ya kwanza. Safari yetu ilianza na dhamira rahisi: kuunda nafasi ya kukaribishwa ambapo kila mtu anaweza kufurahia kahawa ya kipekee na chakula kitamu katika mazingira ya joto na rafiki.",
    ourMission: "Dhamira Yetu",
    ourMissionText: "Tumejitolea kutoa kahawa na chakula bora zaidi huku tukiunda kituo cha jamii ambapo marafiki hukutana, mawazo huchanua, na kumbukumbu zinaundwa. Kila kikombe tunachohudumia na kila sahani tunayoandaa ni ushuhuda wa kujitolea kwetu kwa ubora na kuridhika kwa wateja.",
    ourValues: "Maadili Yetu",
    quality: "Ubora",
    qualityText: "Tunapata viungo bora zaidi na tunatumia njia za jadi za kutengeneza ili kuhakikisha kila kikombe kinakidhi viwango vyetu vya juu.",
    community: "Jamii",
    communityText: "Tunaamini katika kutoa nyuma na kuwa uwepo chanya katika jamii yetu ya ndani.",
    sustainability: "Uendelevu",
    sustainabilityText: "Tumejitolea kwa mazoea rafiki kwa mazingira, kutoka kwa vyanzo hadi kwa huduma.",
    whatPeopleSay: "Watu Wanasema Nini Kuhusu Sisi",
    
    // Menu Page
    menuTitle: "Menyu ya ClockTowerCafe",
    menuSubtitle: "Chunguza uchaguzi wetu wa kahawa, chakula, na vitafunio vilivyoandaliwa kwa uangalifu",
    all: "Yote",
    noItems: "Hakuna vitu vilivyopatikana katika jamii hii.",
    readyToOrder: "Tayari Kuagiza?",
    readyToOrderText: "Weka agizo lako kupitia WhatsApp na tutakuwa tayari nawe!",
    
    // Gallery Page
    galleryTitle: "Galeria Yetu",
    gallerySubtitle: "Chukua safari ya kuona kupitia ClockTowerCafe",
    
    // Contact Page
    contactTitle: "Wasiliana Nasi",
    contactSubtitle: "Tungependa kusikia kutoka kwako! Tutumie ujumbe au utembelee eneo letu.",
    name: "Jina",
    email: "Barua Pepe",
    message: "Ujumbe",
    quantity: "Kiasi (Si Lazima)",
    sendMessage: "Tuma Ujumbe",
    visitUs: "Tutembelee",
    hours: "Masaa",
    phone: "Simu",
    
    // Footer
    quickLinks: "Viungo vya Haraka",
    followUs: "Tufuate",
    allRightsReserved: "Haki zote zimehifadhiwa.",
    
    // Days
    monday: "Jumatatu - Ijumaa",
    saturday: "Jumamosi",
    sunday: "Jumapili",
    mondayHours: "7:00 Asubuhi - 10:00 Jioni",
    saturdayHours: "8:00 Asubuhi - 11:00 Jioni",
    sundayHours: "8:00 Asubuhi - 9:00 Jioni",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
