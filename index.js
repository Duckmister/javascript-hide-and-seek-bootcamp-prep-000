function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested')
}

function increaseRankBy(n){
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; rank.length >i; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
}
