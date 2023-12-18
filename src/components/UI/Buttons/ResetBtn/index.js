import { useDispatch } from 'react-redux'
import { resetAll } from '@store/calc/calc-slice'

import './reset.scss'

const ResetBtn = () => {
  const dispatch = useDispatch()
  
  return (
    <div className="calc__reset" onClick={() => dispatch(resetAll())}>
      Reset all
    </div>
  )
}

export default ResetBtn
