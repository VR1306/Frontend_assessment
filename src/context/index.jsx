import { createContext,useState } from "react";
import { CONSTANTS } from "../constants/constants";

//Default Values for the Context
const INIT_VALUES ={
  isOffline: false,
  headerIcon:null,
  isScrolled:false,
  isResponsive:false,
  defaultResponsiveWidth:1280,
  hamburgerMenu:null,
  isSidebar:false,
  scrollThreshold :10, // Adjust this value as needed,
  current_specific_tab: CONSTANTS.single_app_kisok,
  isAccordionNeeded:false,
  isAccordionOpen:false,
  current_data_accordion:null,
  accordion_data : [
    {
      key: 'Single App Kiosk',
      label: 'Single App Kiosk',
      isOpen: false,
      title: 'Powerful Single-App Kiosk solutions for enhanced control',
      description: [
        'Provision the devices to run one specialized application, with limited functionalities.',
        'Customize the device settings to cater to a specific use-case each time.',
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices."
      ],
    },
    {
      key: 'Multi-App Kiosk',
      label: 'Multi-App Kiosk',
      isOpen: false,
      title: 'Elevate efficiency with Multi-App Kiosk',
      description: [
        'Limit device access to approved apps, ensuring focus and productivity.',
        'With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.',
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        'Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.',
      ]
    },
    {
      key: 'Web Based Kiosk',
      label: 'Web Based Kiosk',
      isOpen: false,
      title: 'Explore the new way to manage web apps and websites',
      description: [
        'Let users access essential and approved web apps, website and files only.',
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case.",
        'From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.',
      ]
    },
    {
      key: 'Digital Signages',
      label: 'Digital Signages',
      isOpen: false,
      title: 'Capture attention with Digital Signage Kiosks',
      description: [
        'Transform your devices into captivating digital signage kiosks that grab attention.',
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        'Advertise and show off your brand aesthetics to attract customers in different ways.',
        "Take control with Hexnode to reestablish your brand's presence.",
      ]
    },
    {
      key: 'ASAM Kiosk', // Corrected the typo
      label: 'ASAM Kiosk',
      isOpen: false,
      title: 'Unlock the power of Autonomous Single App Mode (ASAM)',
      description: [
        'A feature that empowers your iOS app to seamlessly secure itself in the foreground.',
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements.",
        'Configure ASAM effortlessly and elevate your user experience like never before.',
      ]
    }
  ],
  additional_possibilities:[
    {
      id: 1, // Corrected the typo
      isOpen: true,
      title: 'Effortless kiosk deployment & management',
      description: "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs."
    },
    {
      id: 2, // Corrected the typo
      isOpen: false,
      title: 'Customized interface for brand visibility',
      description: "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface."
    },
    {
      id: 3, // Corrected the typo
      isOpen: false,
      title: 'Secure and update your app ecosystem',
      description: "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features."
    },
    {
      id: 4, // Corrected the typo
      isOpen: false,
      title: 'Provide an easy-to-use interface for end-users',
      description: "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free."
    }
  ],
  current_additional_id : 1,
  
  choose_data:[
    {
      id: 1, // Corrected the typo
      isOpen: true,
      title: '"Hexnode is of great value. Works great with Android and iOS!"',
      name:'Justin Modrak',
      post:"Technology Coordinator",
      company:'East Troy Community School District'
    },
    {
      id: 2, // Corrected the typo
      isOpen: true,
      title: '"Most complete MDM solution I found, and I tested many of them, including major names."',
      name:'Dalibor Kruljac"',
      post:"",
      company:'KAMELEYA LTD'
    },    {
      id: 3, // Corrected the typo
      isOpen: true,
      title: '"It seemed to be in-line with everything we were looking at."',
      name:'Chris Robinson',
      post:"Executive Account Manager, NCS",
      company:''
    },
  ],
}

//Context to be used in the Application
const AssessmentContext = createContext(INIT_VALUES)

//Provider for the Context
export const AssessmentContextProvider = ({children}) => {
  const [isOffline, setIsOffline] = useState(INIT_VALUES.isOffline);
  const [headerIcon,setHeaderIcon] = useState(INIT_VALUES.headerIcon);
  const [isScrolled,setIsScrolled] = useState(INIT_VALUES.isScrolled);
  const [isResponsive,setIsResponsive] = useState(INIT_VALUES.isResponsive);
  const [defaultResponsiveWidth] = useState(INIT_VALUES.defaultResponsiveWidth);
  const [hamburgerMenu,setHamburgerMenu] = useState(INIT_VALUES.hamburgerMenu);
  const [currentSpecificTab,setCurrentSpecificTab]=useState(INIT_VALUES.current_specific_tab);
  const [isSidebar,setIsSidebar] = useState(INIT_VALUES.isSidebar);
  const [scrollThreshold] = useState(INIT_VALUES.scrollThreshold);
  const [isAccordionNeeded,setIsAccordionNeeded]=useState(INIT_VALUES.isAccordionNeeded);
  const [currentDataAccordion,setCurrentDataAccordion]=useState(INIT_VALUES.current_data_accordion);
  const [accordion_data,setAccordionData]=useState(INIT_VALUES.accordion_data);
  const [additionalData,setAdditionalData]=useState(INIT_VALUES.additional_possibilities);
  const [currentAdditionalId,setCurrentAdditionalId]=useState(INIT_VALUES.current_additional_id)
  const [chooseData,setChooseData]=useState(INIT_VALUES.choose_data)
  return (
    <AssessmentContext.Provider  
    value={{
      isOffline,
      setIsOffline,
      setHeaderIcon,
      headerIcon,
      isScrolled,
      setIsScrolled,
      isResponsive,
      setIsResponsive,
      defaultResponsiveWidth,
      hamburgerMenu,
      setHamburgerMenu,
      isSidebar,
      setIsSidebar,
      scrollThreshold,
      setCurrentSpecificTab,
      currentSpecificTab,
      isAccordionNeeded,
      setIsAccordionNeeded,
      currentDataAccordion,
      setCurrentDataAccordion,
      accordion_data,
      setAccordionData,
      additionalData,
      setAdditionalData,
      currentAdditionalId,
      setCurrentAdditionalId,
      chooseData,
      setChooseData
    }}
    >
        {children}
    </AssessmentContext.Provider>
  )
}

export default AssessmentContext;