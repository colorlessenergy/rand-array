var arr = ['zero', 'taka', 'daniel', 'sd', 'asdf', 'sdfsd'];
var ideas = [];
var amountOfIdeas = 4;


for (var i = 0; i < amountOfIdeas; i++) {
  // picks a random element in the array
  var rand = Math.floor(Math.random() * arr.length);

  // loops through the array and takes out the one that we previously chose
  arr = arr.filter(function (element) {
    if (element === arr[rand]) {
      ideas.push(arr[rand])
    }
    return element !== arr[rand];
  });

};
