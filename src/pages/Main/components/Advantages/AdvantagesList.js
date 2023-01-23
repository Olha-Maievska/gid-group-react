import React from 'react'
import AdvantagesItem from './AdvantagesItem'
import { advantagesArray } from '@data/advantagesData'

const AdvantagesList = () => {
  return (
    <ul className="advantage__inner">
      {advantagesArray.map(item => 
        <AdvantagesItem
          key={item.id}
          {...item}
        />
      )}
    </ul>
  )
}

export default AdvantagesList