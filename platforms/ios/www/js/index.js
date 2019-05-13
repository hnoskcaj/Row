/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
$(document).ready(function(){
    var round = 0
    var rate = 0
    var avgrate = 0
    var time = 300
    var min = 0
    var sec = 0
    var updown = 1
    var interval = 0
    var strokerate = 0
    var ratetimer = 0
    var timerGoing = false;
    var x = 0
    var y = 0
    var z = 0


   //  strokerate = setInterval(strokerate,10);
   //  function strokerate(){
   //      ratetimer = ratetimer+.01

   //      function watchAcceleration() {
   //          var accelerometerOptions = {
   //            frequency: 3000
   //        }}
   //        var watchID = navigator.accelerometer.watchAcceleration(
   //            accelerometerSuccess, accelerometerError, accelerometerOptions);

   //        function accelerometerSuccess(acceleration) {
            // if((acceleration.x+acceleration.y+acceleration.z)>12){
            //     rate = 60/ratetimer
            //     ratetimer = 0
            //     alert(rate)
            //     $(".ratt").html("<p>"+rate+"</p>")
   //          }
   //      };
   //  };

   //  setTimeout(function() {
   //     navigator.accelerometer.clearWatch(watchID);
   // }, 10000);

   $(".time").html("<p>0:00</p>")
   $(".ratt").html("<p>"+ ratetimer+"</p>")

   $(".start").click(function(){
    // check if counting up
    
    if (timerGoing == false) {
    // start timer up
    interval = setInterval(increment,1000);
    function increment(){
        if (updown == 0){
            time = time+1
            min = parseInt(time/60)
            sec = time-(min*60)
            if(sec<10){
                $(".time").html("<p>"+min+":"+"0"+sec+"</p>")
            }
            else{
                $(".time").html("<p>"+min+":"+sec+"</p>")
            }
            $(".start").html("<p>"+"Stop"+"</p>")
            timerGoing = true;
        }
        else if (updown == 1){
            time = time-1
            min = parseInt(time/60)
            sec = time-(min*60)
            if(sec<10){
                $(".time").html("<p>"+min+":"+"0"+sec+"</p>")
            }
            else{
                $(".time").html("<p>"+min+":"+sec+"</p>")
            }
            $(".start").html("<p>"+"Stop"+"</p>")
            timerGoing = true;
        }
        

    }
}

else {
    clearInterval(interval)
    $(".start").html("<p>"+"Start"+"</p>")
    timerGoing = false;
}
});
    // attempt to stop timer

// check if counting down



// function watchAcceleration() {
//    var accelerometerOptions = {
//       frequency: 3000
//    }
//    var watchID = navigator.accelerometer.watchAcceleration(
//       accelerometerSuccess, accelerometerError, accelerometerOptions);

//    function accelerometerSuccess(acceleration) {
    // if((acceleration.x+acceleration.y+acceleration.z)>12){
    // rate = 60/ratetimer
    // ratetimer = 0
    // alert(rate)
    // $(".ratt").html("<p>"+rate+"</p>")
// }

//       setTimeout(function() {
//          navigator.accelerometer.clearWatch(watchID);
//       }, 10000);

// function accelerometerError() {
//       alert('onError!');
//   };

function watchAcceleration() {
 var accelerometerOptions = {
    frequency: 100
}
var watchID = navigator.accelerometer.watchAcceleration(
  accelerometerSuccess, accelerometerError, accelerometerOptions);

function accelerometerSuccess(acceleration) {
  alert('Acceleration X: ' + x + '\n' +
   'Acceleration Y: ' + y + '\n' +
   'Acceleration Z: ' + z + '\n' +
   'Timestamp: '      + acceleration.timestamp + '\n');
  x = acceleration.x
  y = acceleration.y
  z = acceleration.z
  // ratetimer = math.round(math.sqrt(math.pow(x,2))+math.sqrt(math.pow(y,2))+math.sqrt(math.pow(z,2)))
  $(".ratt").html("<p>"+y+"</p>")
//   if((math.sqrt(math.pow(acceleration.x,2))+math.sqrt(math.pow(acceleration.y,2))+math.sqrt(math.pow(acceleration.z,2)))>18){
//    rate = 1000/ratetimer
//    ratetimer = 0
//    $(".ratt").html("<p>"+rate+"</p>")
// }

setTimeout(function() {
   navigator.accelerometer.clearWatch(watchID);
}, 10000);
};

function accelerometerError() {
  alert('onError!');
};

}



document.getElementById("start").addEventListener("click", watchAcceleration);


});

