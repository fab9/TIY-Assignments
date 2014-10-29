var menuItems = document.getElementById('nav').getElementsByClassName('nav-item');

function addOpenClass(element){
  element.className = 'open';
  // article.className = 'open';
}

function remOpenClass(element){
  element.className = '';
  // article.className = '';
}


/**
 * @param HTMLElement element
 * @return Boolean whether `element` has `className` of "open"
 */
function hasOpenClass(element){
  if ( element.className === 'open' ){
    return true;
  }

  return false;
}


function toggleOpenClass(element){
  if ( hasOpenClass(element) ){
      return remOpenClass(element);
  }

  addOpenClass(element);

}