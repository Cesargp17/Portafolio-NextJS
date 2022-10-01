import React, { useEffect } from 'react'
import { useLayoutEffect, useState } from 'react';

export const useIsMobile = () => {

    const [width, setWidth] = useState();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

  return {
    isMobile
  }
}
