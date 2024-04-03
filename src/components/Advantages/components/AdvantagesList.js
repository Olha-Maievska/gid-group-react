import AdvantagesItem from './AdvantagesItem'

const AdvantagesList = ({data}) => {
  return (
    <ul className="advantage__inner">
      {data.map(item => 
        <AdvantagesItem
          key={item.id}
          {...item}
        />
      )}
    </ul>
  )
}

export default AdvantagesList