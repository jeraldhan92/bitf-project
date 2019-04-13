var file = document.getElementById('wishlist').files[0];

var data;

function handleFileSelect(evt) {
  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      console.log(results)
    }
  });
}
