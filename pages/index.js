import React from 'react'
import fetch from 'isomorphic-fetch'

class App extends React.Component {

  static async getInitialProps() {
    const response = await fetch('https://api.github.com/users/gaearon/gists')
    const gists = await response.json()
    return { gists }
  }

  render() {
    return (
      <div>
        <h3>
          It is pretty awesome to write a React SSR app in such simple way
        </h3>
        <ul>
          {
            this.props.gists.map(gist => (
              <li key={gist.id}>{gist.description}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  gists: React.PropTypes.array,
}

export default App
