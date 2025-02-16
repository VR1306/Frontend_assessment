import { createContext,useState } from "react";

//Default Values for the Context
const INIT_VALUES ={
  isOffline: false,
  headerIcon:null,
  isScrolled:false,
  isResponsive:false,
  defaultResponsiveWidth:1280,
  hamburgerMenu:null,
  isSidebar:false,
  scrollThreshold :10, // Adjust this value as needed

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
  const [isSidebar,setIsSidebar] = useState(INIT_VALUES.isSidebar);
  const [scrollThreshold] = useState(INIT_VALUES.scrollThreshold);
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
    }}
    >
        {children}
    </AssessmentContext.Provider>
  )
}

export default AssessmentContext;