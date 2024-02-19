const name = 'aLi PaAjasa'
console.log(name.toUpperCase())
console.log(name.toLowerCase())
function toTitleCase(str:string) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase(name))