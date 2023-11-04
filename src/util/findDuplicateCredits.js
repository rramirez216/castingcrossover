function findDuplicateCredits(array1, array2) {
  let combinedArr = [...array1, ...array2]
    .filter(
      (obj) =>
        obj.character !== 'Self' && obj.character !== 'Self (archive footage)'
    )
    .map((obj, index) => {
      console.log({ name: obj.title, indice: index })
      return obj.title
    })
  let filteredArr = combinedArr.filter(
    (string, index) => combinedArr.indexOf(string) !== index
  )
  return filteredArr
}

export default findDuplicateCredits
