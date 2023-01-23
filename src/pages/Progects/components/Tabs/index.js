import { tabsArray } from '@data/tabs'

import './tabs.scss'

const Tabs = () => {
  return (
    <div className="tabs">
      {tabsArray.map(tab =>
        <div
          className="tab"
          key={tab.id}
        >
          {tab.title}
        </div>
      )}
    </div>
  )
}

export default Tabs