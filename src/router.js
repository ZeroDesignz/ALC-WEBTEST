import React from 'react'
import {
  BrowserRouter
} from 'react-router-dom'

import { App } from './app'

export const Router = () => {
  return (
    <BrowserRouter 
    basename={window.location.pathname || ''} 
    >
      <App 
      // exact path="/"
      />
    </BrowserRouter>
  )
}
