/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import {Component} from 'react'

import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {
    resources,
  }

  changeWindow = name => {
    if (name === 'Happy') {
      console.log('THANKYOU')
    }
  }

  render() {
    const {resources} = this.state
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-container">
        <div className="feedback-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojis">
            {emojis.map(each => (
              <Feedback
                emojiDetails={each}
                key={each.id}
                changeWindow={this.changeWindow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default App
