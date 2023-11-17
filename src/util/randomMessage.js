import constantObj from '../data/constants'

const randomMessage = () => {
  let arrayCopy = [...constantObj.noMatchesMessages]
  let randomNum = Math.floor(Math.random() * arrayCopy.length)

  return arrayCopy[randomNum]
}

export default randomMessage
