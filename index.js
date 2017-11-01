function theBeatlesPlay(musicians, instruments) {
var list = []
  for (var i = 0; i < musicians.length; i++) {
list.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return (list)
}

var i = 0

function johnLennonFacts(facts) {
  var i = 0
  var array = []
  while (i < facts.length) {
          array.push(facts[i++] + "!!!")
  }
  return (array)
}
