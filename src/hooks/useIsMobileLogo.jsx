import { useState, useEffect } from "react";

export function useIsMobileLogo() {
    const [isMobileLogo, setIsMobileLogo] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileLogo(window.innerWidth <= 600);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobileLogo;
}