function theBeatlesPlay(musicians, instruments) {
var list = []
  for (var i = 0; i < musicians.length; i++) {
list.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return (list)
}


function johnLennonFacts(facts) {
  while (facts.length > 0) {
    console.log(facts + "!!!")
  }
}
