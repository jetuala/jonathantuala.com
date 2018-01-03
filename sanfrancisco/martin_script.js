var game = {
  currentLocation: 'New York City',
  locationIndex: -1,
  clue: 0,
  nations: [
    ['Brazil', 'the Christ Redeemer statue', ['mentioned something about the 2016 Summer Olympics', 'said he wanted to fish for pirahna', 'said he was going to Carnival', 'started humming "Girl from Ipanema"', 'started speaking Portuguese', 'wanted some really good coffee' ]],
    ['Germany', 'the Brandenburg Gate', ['wanted to sample some local beers', 'dropped a book by Heidegger', 'was listening to an opera by Wagner', 'wanted to go to the "land of poets and thinkers"', 'didn\'t want to obey any speed limit', 'wanted to visit a city with more bridges than Venice', 'was craving some sausage']],
    ['Egypt', 'the sarcophagus of Ramses II', ['wanted to do research at an ancient library', 'was thinking about stealing the canal in Suez', 'wanted to take a selfie at the Aswan Dam', 'said he wanted to take a dip in the Mediterranean', 'was hoping to make it to the Night of the Tear Drop', 'wanted to visit the opera house where Aida premiered', 'said he wants to float along the Nile']],
    ['Australia', 'all the kangaroos from Taronga Zoo', ['wanted to see the longest fence in the world', 'dropped a brochure about the Moomba Waterfest', 'wanted to go cockroach racing', 'was thinking of getting a lyrebird as a pet', 'is heading to the outback', 'called me a "banana bender"', 'made friends with some Aborigines']],
    ['Japan', 'the snow from the top of Mount Fuji', ['mentioned he wanted to eat a square watermelon', 'was reading a history book about Hachiman', 'was trimming his bonsai tree', 'had a cherry blossom on his lapel', 'wants to people-watch at Shinjuku Station', 'was snacking on some matcha flavored Kit-Kats', 'is going karaoke singing soon']],
    ['India', 'the Taj Mahal', ['wanted to travel over the Bandra Worli Sealink', 'is going to the world\'s second-largest English speaking country', 'is thinking of becoming a vegetarian', 'mentioned he was learning Telugu and Marathi', 'wants to adopt a Bengal tiger', 'needed a mint. His breath smelled of curry', 'was watching a Bollywood movie on his phone']],
    ['Ireland', 'the Blarney Stone', ['was drinking some Guinness', 'was carrying around a four-leaf clover', 'is going to visit a friend in County Kerry', 'was listening to Celtic harp music', 'hates snakes. He\'s going somewhere that doesn\'t have any', 'recited a poem by W.B. Yeats to me', 'offered me a dish of colcannon']],
    ['Mexico', 'Chapultapec Castle', ['wanted to visit the world\'s largest pyramid by volume', 'wants to cliff dive in Acapulco', 'wants to visit a temple on the Yucatan peninsula', 'was doing research on Kukulcan and Quetzalcoatl', 'was drinking margaritas and eating tamales', 'tried to pay me with pesos', 'was thinking about taking up charreada']],
    ['China', 'the keys to the Forbidden City', ['said he was training to row in a dragon boat festival', 'had some chopsticks in his pocket', 'wants to swim in the Yellow River', 'is thinking about disappearing into a population of 1.4 billion people', 'asked me how to say "criminal" in Mandarin', 'wanted to visit the site of the 2008 Summer Olympics', 'just bought a giant panda onesie']],
    ['Peru', 'a flock of Andean condors', ['just rented a hotel room in Lima', 'was practicing his Quechua', 'wanted to go sailing on Lake Titicaca', 'ordered a Pisco Sour with a side of ceviche', 'dropped a postcard of Machu Picchu', 'was wearing a sweater made of alpaca wool', 'wants to hit up the best surfing location in the world']],
    ['Spain', 'the Prado Museum', ['thinks siestas are a good idea', 'was tilting at windmills', 'was getting ready to fight in La Tomatina', 'was craving some paella and tapas', 'was in the market for a Picasso', 'just bought a summer home in Malaga', 'wants to walk down the Camino de Santiago']],
    ['Russia', 'the spire off the top of St. Basil\'s Cathedral', ['wanted to see how fast he could cross 9 time zones', 'was craving Mcnuggets at the world\'s largest McDonald\'s', 'had a wallet full of rubles', 'wanted to kill some time at the Hermitage Museum', 'was telling me about his dog Laika', 'wanted to visit the meteor impact site at Tunguska', 'was listening to Tchaikovsky']],
    ['Turkey', 'Bosphorus Bridge', ['just bought some gear to climb Mount Ararat', 'is going window shopping at the Grand Bazaar', 'had a hankering for chicken breast pudding', 'was munching on some baklava', 'was paging through a biography of Gazi Mustafa Kemal', 'wants to commute between Europe and Asia easily', 'had a knot in his back and was planning on going to a hammam']],
    ['France', 'the Bayeux Tapestry', ['had a pamphlet from the Louvre', 'was playing with a model of Mont St. Michel', 'thought he could open a boulangerie with his loot', 'wants to see the original Statue of Liberty', 'was snacking on some macarons', 'thought about hiding out in some underground catacombs', 'wants to watch some movies in Cannes']],
    ['Italy', 'the Leaning Tower of Pisa', ['ordered the gnocchi', 'wanted to steal some change from the Trevi Fountain', 'is going to start a calcio league', 'was muttering, "Una sola lingua non e mai abbastanza"', 'wants to learn how to ride a gondola', 'idolizes Galileo Galilei', 'was carrying a cornicello charm']],
  ],
  setCountryStack: function() {
    shuffle(this.nations);
    for (var i = 0; i < this.nations.length; i++) {
      shuffle(this.nations[i][2]);
    }
  },
  fly: function(countryId) {
    this.currentLocation = countryId;
    $( "#cityImage" ).attr("src", "../../images/" + countryId + ".jpg");
    $( "#currentLocationHTML" ).html(countryId);
    timeSubtract(8);
    clearNotepad();
    assignPhoneIcons();
    menuDisplay();
    this.locationIndex += 1;
    this.clue = 0;
  },

  flyBack: function(countryId) {
    this.fly(countryId);
    this.locationIndex -= 2;
  },

  getClue: function() {
    timeSubtract(2);
    clearNotepad();
    if (game.locationIndex === 9) {
    // win conditions
      $( "#notepadText" ).text("Congratulations! You've caught Martin Sanfrancisco and returned " + game.currentStolenItem + " to the people of " + game.nations[0][0] + "!!");
      var ul = document.querySelector('ul');
      $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' id='restart' onClick='game.startGame()'>Start New Game</button></li>");
      //remove button function
      $( "#phoneButton" ).attr("onClick", "");
      $( "#getClueButton").attr("onClick", "");
      $( "#travelMenuButton").attr("onClick", "");
      $( "#gameMenuButton").attr("onClick", "");
    } else {
    // if after first country and wrong country
      if (this.locationIndex > 0 && this.currentLocation != this.nations[this.locationIndex][0]) {
        $( "#notepadText" ).text("I have no idea what you're talking about. Are you sure you're in the right place?");
      } else {
        $( "#notepadText" ).text("He " + this.nations[this.locationIndex + 1][2][this.clue] + ".");
        this.clue += 1;
        if (this.clue > 6) {
          this.clue = 0;
        }
      }
    }
  },
  isRunning: function() {

  },
  startGame: function() {
    this.time = 168;
    document.getElementById("timeHTML").innerHTML = this.time;
    this.setCountryStack();
    this.currentStolenItem = this.nations[0][1];
    this.locationIndex = -1;
    callChief();
  },
  reportGoogle: function() {
    timeSubtract(1);
  }
}

function shuffle(array) {
  for(var i = array.length; i > 1; i--) {
    var r = Math.floor(Math.random() * i);
    var temp = array[r];
    array[r] = array[i-1];
    array[i-1] = temp;
  }
}

function timeSubtract(hours) {
  game.time -= hours;
  document.getElementById("timeHTML").innerHTML = game.time;
  if (game.time === 0) {
    alert("You ran out of time!");
  }
}

function assignPhoneIcons() {
  $( "#phoneButton" ).attr("onClick", "callChief()");
  $( "#getClueButton").attr("onClick", "game.getClue()");
  $( "#travelMenuButton").attr("onClick", "travelMenu()");
  $( "#gameMenuButton").attr("onClick", "gameMenu()");
}

function clearNotepad() {
  var ul = document.querySelector('ul');
  notepadText.innerHTML = '';
  ul.innerHTML = '';
}

function callChief() {
  clearNotepad();
  $( "#smartphone" ).attr("src", "../../images/smartphone-chief.png");
  $( "#notepadText" ).text("Hello Private Investigator! Martin Sanfrancisco just stole " + game.currentStolenItem + "! Follow Martin\'s trail by traveling across ten countries, investigating clues at each location, and return the stolen item before the deadline! ");
  $( "#smartphone" ).attr("onClick", "menuDisplay()");
  if (game.locationIndex === -1) {
    var firstCountry = game.nations[0][0];
    var ul = document.querySelector('ul');
    $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' onClick='game.fly(\"" + firstCountry + "\")'>Fly to " + firstCountry + "</button></li>");
  } else {
    if (game.locationIndex === 0) {
      $( "#notepadText" ).append("<br><br>You have visited 1 country so far.");
    } else {
      $( "#notepadText" ).append("<br><br>You have visited " + (game.locationIndex + 1) +" countries so far.");
    }
  }
}

function menuDisplay() {
  $( "#smartphone" ).attr("src", "../../images/smartphone2.png");
  clearNotepad();
}

function travelMenu() {
  clearNotepad();
  $( "#smartphone" ).attr("src", "../../images/smartphone-travel.png");
  var ul = document.querySelector('ul');
  $("#notepadText").text("Travel to which destination?");
  // Generate buttons
    // Everything but the first
  if (game.locationIndex > 1) {
    $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' id='travel0' onClick='game.flyBack(\"" + game.nations[game.locationIndex - 1][0] + "\")'>" + game.nations[game.locationIndex - 1][0] + "</button></li>");
    for (var i = 1; i < 4; i++) {
        $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' id='travel" + i + "' onClick='game.fly(\"" + game.nations[game.locationIndex + i][0] + "\")'>" + game.nations[game.locationIndex + i][0] + "</button></li>");
    }
    // First country
  } else {
    $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' id='travel0' onClick='game.fly(\"" + game.nations[game.locationIndex][0] + "\")'>" + game.nations[game.locationIndex][0] + "</button></li>");
    for (var i = 1; i < 4; i++) {
      $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' id='travel" + i + "' onClick='game.fly(\"" + game.nations[game.locationIndex + i][0] + "\")'>" + game.nations[game.locationIndex + i][0] + "</button></li>");
    }
  }
  // Randomize ul
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}

function gameMenu() {
  clearNotepad();
  var ul = document.querySelector('ul');
  $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' id='restart' onClick='game.startGame()'>Start New Game</button></li>");
  $(ul).append("<li><button class='w3-button w3-round-large w3-white travelButton' id='cancel' onClick='menuDisplay()'>Cancel</button></li>");
}

// Responsive image map plug-in
$(document).ready(function() {
    $('map').imageMapResize();
});
