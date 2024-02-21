function findDuplicateCredits(array1, array2) {
  let firstArr = removeSelfRoles(array1)
  let secondArr = removeSelfRoles(array2)

  console.log(firstArr[49], secondArr[0])

  firstArr = firstArr
    .map((obj) => {
      let secondRole = null
      let similarTitleSearch = secondArr.findIndex(
        (item) => obj.title === item.title
      )
      if (similarTitleSearch >= 0) {
        secondRole = secondArr[similarTitleSearch].character
        console.log(secondRole)
      }

      return {
        title: obj.title,
        release_date: obj.release_date,
        poster_path: obj.poster_path,
        role: obj.character,
        roleTwo: secondRole,
      }
    })
    .filter((obj) => obj.roleTwo)

  console.log(firstArr)
  return firstArr
  // iterate over first array
  // findindex of a obj that has same title as current obj in map
  // use that index to find it and add it to current obj as a new prop

  // let combinedArr = [...array1, ...array2].filter(
  //   (obj) =>
  //     obj.character !== 'Self' && obj.character !== 'Self (archive footage)'
  // )
  // let filteredArr = combinedArr
  //   .filter(
  //     (obj, index) =>
  //       combinedArr.findIndex((item) => item.title === obj.title) !== index
  //   )
  //   .map((obj) => {
  //     return {
  //       title: obj.title,
  //       release_date: obj.release_date,
  //       poster_path: obj.poster_path,
  //       role: obj.character,
  //     }
  //   })
  // console.log(filteredArr)
}

const removeSelfRoles = (arr) => {
  return arr.filter(
    (obj) =>
      obj.character !== 'Self' && obj.character !== 'Self (archive footage)'
  )
}

export default findDuplicateCredits
