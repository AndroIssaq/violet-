import React from 'react'
import Coursel from '../../components/Coursel'
import { NewArrivel } from '../../components/NewArrivel'
import BestSelling from './../../components/BestSelling';
const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="content w-[100%]">
          <div className="coursel">
            <Coursel/>
          </div>
          <div className="newArrivel ">
            <NewArrivel/>
          </div>
          <div className="best-selling ">
            <BestSelling/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home