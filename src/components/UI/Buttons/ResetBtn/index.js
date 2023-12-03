import { useDispatch } from 'react-redux'
import { resetAll } from '@store/calc/calcActions'

import './reset.scss'

const ResetBtn = () => {
  const dispatch = useDispatch()
  
  return (
    <div className="calc__reset" onClick={() => dispatch(resetAll)}>
      Reset all
    </div>
  )
}

export default ResetBtn
