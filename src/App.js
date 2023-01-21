import React from 'react'
import FirstSection from './FirstSection';
import Landing_page from './Landing_page';

import "./app.css"
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import NumberBar from './NumberBar';
import Cards from './Cards';
const App = () => {
  return (
    <div className='container-fluid'>
      <Landing_page></Landing_page>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <NumberBar></NumberBar>
      <Cards></Cards>
    </div>
  )
}

export default App