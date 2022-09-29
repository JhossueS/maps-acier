import { useContext } from 'react'
import { toggleCircle } from '../../context/actions'
import { Store } from '../../context/AppContext'
import './style.css'

const MapControls = () => {
  const { dispatch } = useContext(Store)

  const handleCircle = () => {
    toggleCircle(dispatch)
  }

  return (
    <div className="control--container">
      <button onClick={handleCircle}>Circle</button>
    </div>
  )
}

export default MapControls
