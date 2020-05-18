// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

function callServer(id) {
  fetch(`http://localhost:3000/api/monks/${id}.json`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
}

const Monk = props => {
  console.log(props)

  return (
    <div>
      <div onClick={() => callServer(props.id)}>Monk with id {props.id}</div>
    </div>
  )
}

const Rake = props => {
  let monkElements = props.monks.map(function(monk, i) {
    return <Monk {...monk} key={i} />
  })

  return <div>{monkElements}</div>
}

// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: PropTypes.string
// }

document.addEventListener('DOMContentLoaded', () => {
  let props = document.getElementsByTagName('div')[0].dataset.props
  let testContent = JSON.parse(props)

  ReactDOM.render(
    <Rake monks={testContent} />,
    document.body.appendChild(document.createElement('div'))
  )
})
