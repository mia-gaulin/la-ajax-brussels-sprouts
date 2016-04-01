$('#get-dish').on('click', function(event) {
  event.preventDefault();
  var request = $.ajax({
    method: 'GET',
    url: '/dishes/random.json'
  })
  request.done(function(randomDish) {
    alert("Your random dish is: " + randomDish["dish"]);
  });
});
