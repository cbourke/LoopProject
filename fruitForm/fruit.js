
fruits = ["Pineapple", "Pear", "Apple", "Banana", "Grapes"];


function test() {

  var val = $('input:radio[name=fruit]:checked').val();
  if(val === undefined) {
    alert("Nothing is checked!");
  } else {
    alert("you've selected " + fruits[val] + " (value = " + val + ")");
  }

}
