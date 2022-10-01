import React, { useState } from 'react'
import { DarkTheme } from '../themes/DarkTheme';
import { LightTheme } from '../themes/LightTheme';
import { UIContext } from './UIContext'

export const UIProvider = ({ children }) => {

    const [Theme, setTheme] = useState(LightTheme);
    const [ThemeIcon, setThemeIcon] = useState(<i class="fa-solid fa-moon"></i>);

    const onChangeTheme = () => {
        if ( Theme === LightTheme ){
            setTheme( DarkTheme )
            setThemeIcon( <i class="fa-solid fa-sun"></i> )
        } else if ( Theme === DarkTheme ){
            setTheme( LightTheme )
            setThemeIcon( <i class="fa-solid fa-moon"></i> )
        };
    };

  return (
    <UIContext.Provider value={{ Theme: Theme, DarkTheme: DarkTheme, onChangeTheme, ThemeIcon: ThemeIcon }}>
        { children }
    </UIContext.Provider>
  )
}
