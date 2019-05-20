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
    var ratecount = 0
    var time = 0
    var min = 0
    var sec = 0
    var updown = 0
    var interval = 0
    var strokerate = 0
    var ratetimer = 0
    var timerGoing = false;
    var x = 0
    var y = 0
    var z = 0
    var custominterval = 0
    var stroketimer = 0
    var a = 0
    var b = 0
    var c = 0
    var rest = 0
    var restcheck = 0
    var truetime = 0


    $("#settingSubmit").click(function(){
        // console.log(document.getElementById("mins").value);
        custominterval = parseInt(document.getElementById("mins").value)*60+parseInt(document.getElementById("secs").value);
        rest = parseInt(document.getElementById("rmins").value)*60+parseInt(document.getElementById("rsecs").value);
        time = custominterval;
        // console.log(time)

        updown = 1
        localStorage.setItem("time", time);
        localStorage.setItem("rest", rest);
        // localStorage.setItem("upordown", updown);
    });

    time = localStorage.getItem("time");
    truetime = time;
    rest = localStorage.getItem("rest");
    
    // updown = localStorage.getItem("upordown");

    if (time > 0) {
        updown = 1;
    } else {
        updown = 0;
    }
   $(".time").html("<p>0:00</p>")
   $(".ratt").html("<p>0</p>")
   $(".avgt").html("<p>"+"0"+"</p>");
   


if(isNaN(time)){
        time = 0
    }
if(time==null){
    time = 0
}
   $(".start").click(function(){
    // custominterval = document.getElementById("mins")*60+document.getElementById("mins");
    // alert(document.getElementById("mins"));
    
    // check if counting up
    if (timerGoing == false) {
    // start timer up
    // stroketimer = setInterval(stroketimerf,10);
    // function stroketimerf(){
    //     ratetimer1 = ratetimer + .01
    //     ratetimer = ratetimer1
    // }




 var accelerometerOptions = {
    frequency: 200
};
var watchID = navigator.accelerometer.watchAcceleration(
  accelerometerSuccess, accelerometerError, accelerometerOptions);

function accelerometerSuccess(acceleration) {
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    ratetimer = ratetimer + .2;
    
    a = b+3;
    b = c-3;
    c = (Math.abs(x)+Math.abs(y)+Math.abs(z));

    if(a<b && b>c){
        rate = 60/ratetimer;
        $(".ratt").html("<p>"+rate+"</p>");
        ratetimer = 0;
        ratecount = ratecount + 1
        if(updown == 0){
        avgrate = ratecount/(time/60)
        }
        else if(updown == 1){
            avgrate = ratecount/((truetime-time)/60)
        }
        $(".avgt").html("<p>"+avgrate+"</p>");

    };


};

function accelerometerError() {
  alert('onError!');
};




console.log(time)


    interval = setInterval(increment,1000);
    function increment(){
        if (updown == 0){
            time = parseInt(time)+1
            min = parseInt(time/60);
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
            if(time == 0){
                
                if(restcheck == 0){
                    time = rest
                    restcheck = 1
                    round = round + 1
                    $(".roundt").html("<p>"+round+"</p>")
                }
                else if(restcheck ==1){
                    time = localStorage.getItem("time")
                    restcheck = 0
                }
            };
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
 





// document.getElementById("start").addEventListener("click", watchAcceleration);


});

