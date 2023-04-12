/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Write your React code here.

import './index.css'

const Feedback = props => {
  const {emojiDetails} = props
  const {name, imageUrl} = emojiDetails

  loveWindow = () => {
    changeWindow(name)
  }

  return (
    <li>
      <button type="button" className="button">
        <img src={imageUrl} alt="" onClick={loveWindow} />
      </button>
      <p className="name">{name}</p>
    </li>
  )
}
export default Feedback
