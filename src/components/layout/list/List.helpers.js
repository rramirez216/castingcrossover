const assignSelectedSortByProperty = (option, obj) => {
  if (option === 'alphabetical') {
    return obj.title.toUpperCase()
  }
  return obj.release_date
}

const sortListByDescending = (arr, str2) => {
  return arr.sort((movieOne, movieTwo) => {
    let property1 = assignSelectedSortByProperty(str2, movieOne)
    let property2 = assignSelectedSortByProperty(str2, movieTwo)
    return property1 > property2 ? -1 : property1 < property2 ? 1 : 0
  })
}

const sortListByAscending = (arr, str2) => {
  return arr.sort((movieOne, movieTwo) => {
    let property1 = assignSelectedSortByProperty(str2, movieOne)
    let property2 = assignSelectedSortByProperty(str2, movieTwo)
    return property1 > property2 ? 1 : property1 < property2 ? -1 : 0
  })
}

const sorter = (arr, str, str2) => {
  if (str === 'ascending') {
    return sortListByAscending(arr, str2)
  } else {
    return sortListByDescending(arr, str2)
  }
}

export default sorter
