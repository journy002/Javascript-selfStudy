// border-left-width를 borderLeftWidth로 변경하기

function camelize(str) {
  return console.log(
    str
      .split('-')
      .map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1),
      )
      .join(''),
  )
}

camelize('bakground-color')
camelize('list-style-image')
