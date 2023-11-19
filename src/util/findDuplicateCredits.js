function findDuplicateCredits(array1, array2) {
  let combinedArr = [...array1, ...array2]
    .filter(
      (obj) =>
        obj.character !== 'Self' && obj.character !== 'Self (archive footage)'
    )
    .map((obj) => {
      return {
        title: obj.title,
        release_date: obj.release_date,
        poster_path: obj.poster_path,
      }
    })

  let filteredArr = combinedArr.filter(
    (obj, index) =>
      combinedArr.findIndex((item) => item.title === obj.title) !== index
  )
  return filteredArr
}

export default findDuplicateCredits
