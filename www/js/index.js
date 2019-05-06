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
    var updown = 0
    $(".time").html("<p>0:00</p>")

    $(".start").click(function(){
        if (updown = 0){
        
        var interval = setInterval(increment,1000);
        function increment(){
            time = time+1
            min = parseInt(time/60)
            sec = time-(min*60)
            $(".time").html("<p>"+min+":"+sec+"</p>")
            $(".start").html("<p>"+"Stop"+"</p>")
            

        }
        $(".start").click(function(){clearInterval(interval)});
    }
    else if (updown = 1){
        var interval = setInterval(increment,1000);
        function increment(){
            time = time-1
            min = parseInt(time/60)
            sec = time-(min*60)
            $(".time").html("<p>"+min+":"+sec+"</p>")
            $(".start").html("<p>"+"Stop"+"</p>")
            

        }}
        });


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById("getAcceleration").addEventListener("click", getAcceleration);
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
});