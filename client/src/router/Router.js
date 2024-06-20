import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import RanmoPlastic from '../page/RanmoPlastic'

const Router = () => {
    return (
      <Routes>
          <Route path='/' element={<Navigate to = '/RanmoPlastic' />} />
          <Route path='/RanmoPlastic' element={<RanmoPlastic/>} />
      </Routes>
    )
  }
  
  export default Router