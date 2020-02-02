import React from 'react'
import Form from './Components/Form'
import { formFormat } from './Forms/formTemplate'

const App = () => {
  return (
    <div>
      <Form formFormat={formFormat}/>
    </div>
  )
}

export default App
