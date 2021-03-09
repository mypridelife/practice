const sum = function () {
  console.log('arguments', arguments)
  const args = Array.from(arguments)
  console.log('args', args)
  return args.reduce((count, item) => {
    if (typeof item === 'number') {
      return count + item
    } else {
      return count
    }
  }, 0)
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3, 4))

const uri = encodeURI(
  'https://flipped.binfenyingyu.com/web/#/flipped/order?env=inweb'
)
console.log('uri', uri, uri2)
