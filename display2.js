var wishlist = [];
var xgrid = [];
var feed = [];


function handleFileSelect(evt) {
  var file = evt.target.files[0];

  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      wishlist.push(results.data);
      wishlist = wishlist[0];
      xgrid.push(Math.ceil((wishlist.length)**0.5));
      feed.push(wishlist[0]);
      console.log(wishlist);
    }
  });

for (i = 0; i < wishlist.length; i++) {


}

}

$(document).ready(function(){
  $("#csvFile").change(handleFileSelect);
});
