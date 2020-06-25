import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { chartData } from './Constants/chartData';

// Create Context
export const GlobalContext = createContext(chartData);

// Create Provider
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, chartData);

  return (
    <GlobalContext.Provider value={
      { 
        data: state
      }
      }>
      {children}
    </GlobalContext.Provider>
  )
}