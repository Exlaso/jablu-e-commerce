'use client'
import { useEffect, useState } from "react";

const isTouchScreen = ():boolean => {
    const [isTouchScreen, setIsTouchScreen] = useState<boolean>(false);

    useEffect(() => {
      const checkTouchScreen = () => {
        if ("ontouchstart" in window || navigator.maxTouchPoints) {
          setIsTouchScreen(true);
        }
      };
  
      checkTouchScreen();
  
      // You can remove the event listener once it's checked
      window.removeEventListener("touchstart", checkTouchScreen);
  
      // Add event listener to check for touch screen devices
      window.addEventListener("touchstart", checkTouchScreen);
  
      return () => {
        // Clean up the event listener on unmount
        window.removeEventListener("touchstart", checkTouchScreen);
      };
    }, []);

    return isTouchScreen
}
export default isTouchScreen