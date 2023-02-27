import React, { useState, createContext, useEffect } from 'react';

// import Pages
import LandingPage from './Pages/LandingPage';

// Create AppContext
export const AppContext = createContext({});


const App = () => {

  const [initState, setInitState] = useState('HAI')

  const AppContextValue = {
    initState
  }

  return (
    <AppContext.Provider value={AppContextValue}>
      <LandingPage />
    </AppContext.Provider>
  )
}

export default App
