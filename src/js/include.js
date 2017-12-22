function Memory(boxId, result) {
  this.scrollBox = boxId;
  this.digit_4 = result['box-4'];
  this.digit_5 = result['box-5'];
  this.digit_6 = result['box-6'];
  this.digit_7 = result['box-7'];
  this.digit_8 = result['box-8'];
}

function Candidate() {
  this.IDs = [];

  this.digit_4_cnt = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  };
  this.digit_5_cnt = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  };
  this.digit_6_cnt = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  };
  this.digit_7_cnt = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  };
  this.digit_8_cnt = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0
  };
}

function ID(id) {
  this.id = id;
  this.digit_4 = id.toString().charAt(3);
  this.digit_5 = id.toString().charAt(4);
  this.digit_6 = id.toString().charAt(5);
  this.digit_7 = id.toString().charAt(6);
  this.digit_8 = id.toString().charAt(7);
}

function randNum(candidateObj, digit) {
  var randomConfig = candidateObj['digit_' + digit + '_cnt'];
  var randomList = [];
  for (var i in randomConfig) {
    for (var j = 0; j < randomConfig[i]; j++) {
      randomList.push(i);
    }
  }
  console.log(randomList);
  let randomIndex = Math.floor(Math.random() * randomList.length)
  console.log("randomIndex:" + randomIndex);

  var randomValue = randomList[randomIndex];
  return randomValue;
}
