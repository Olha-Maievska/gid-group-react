import './tabs.scss'

const Tab = ({title, active = '', handleTabs}) => {
  return (
    <div className={`tab ${active}`} onClick={handleTabs}>{title}</div>
  )
}

export default Tab