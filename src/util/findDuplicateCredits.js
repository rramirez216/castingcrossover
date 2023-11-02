function findDuplicateCredits(array1, array2) {
  let combinedArr = [...array1, ...array2].map((obj) => obj.title)
  let filteredArr = combinedArr.filter(
    (string, index) => combinedArr.indexOf(string) !== index
  )
  return filteredArr
}

export default findDuplicateCredits
