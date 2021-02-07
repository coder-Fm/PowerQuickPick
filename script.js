'use strict';

// Max 10 QuickPicks - Alert message
function DisplayAlert() {
  var newLine = "\r\n";
  var msg = "You've reached the maximum number of Quick Picks";
  msg += newLine;
  msg += newLine;
  msg += "Please print your 10 quick picks before resetting.";
  alert(msg);
}

var count = 0;
var pickButton = document.getElementById("pickbtn");
pickButton.onclick = function incrementCount() {
  count++;
  if (count >= 10) {
    pickButton.disabled = true;
    DisplayAlert();
  }

}

document.querySelector('.pick').addEventListener('click', function () {

  const nums = [];
  const powernum = [];

  // 5 Numbers quick pick, no duplicates
  while(nums.length < 5) {
    var QuickPick = Math.trunc(Math.random() * 69) + 1;
    if (nums.indexOf(QuickPick) === -1) {
      nums.push(QuickPick);
    }
  }

  // Sorting
  nums.sort(function(a, b){return a - b});

  // Power Pick
  let QuickPickPower = Math.trunc(Math.random() * 26) + 1;
  powernum.push(QuickPickPower);
  document.querySelector('#power').textContent = QuickPickPower;


  //Display History
  const displayMessage = function (history) {
    for (var prop in history) {
      document.querySelector('.QuickPickList').innerHTML += '<li>' + history_nums + '</li>';
    }

    console.log(history_nums);
  };
  var history = [];
  var history_nums = nums.join('\t').concat('\t'+powernum);
  history.push(history_nums);
  displayMessage(history);


  // Display on screen : 5 + Power
  let QuickPick1 = nums[0];
  let QuickPick2 = nums[1];
  let QuickPick3 = nums[2];
  let QuickPick4 = nums[3];
  let QuickPick5 = nums[4];

  document.querySelector('#number1').textContent = QuickPick1;
  document.querySelector('#number2').textContent = QuickPick2;
  document.querySelector('#number3').textContent = QuickPick3;
  document.querySelector('#number4').textContent = QuickPick4;
  document.querySelector('#number5').textContent = QuickPick5;

});

document.querySelector('.reset').addEventListener('click', function() {
  document.querySelector('#number1').textContent = '?';
  document.querySelector('#number2').textContent = '?';
  document.querySelector('#number3').textContent = '?';
  document.querySelector('#number4').textContent = '?';
  document.querySelector('#number5').textContent = '?';
  document.querySelector('#power').textContent = '?';

  document.querySelector('.QuickPickList').textContent = '';
  console.clear();
  count = 0;
  pickButton.disabled = false;
});


