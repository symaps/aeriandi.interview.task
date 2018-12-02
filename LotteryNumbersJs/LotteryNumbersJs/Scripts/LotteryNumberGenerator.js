var numberGenerator = function () {
    "use strict";

    var ballBank = []; // all the available balls. Balls can be in one of two states not selected or selected. This is analogus to being inside the ball machine or on the display rack.
    var results = null;
    var totalBallCount = 49;
    var selectBallCount =6;
    ballBank = [];

    var resetBallBank = function () {
        var i = 0;
        ballBank = [];
        for (i = 0; i < totalBallCount; ++i) {
            ballBank.push({ number: i + 1, selected: false });
        }
    };
    var pickBall = function () {
        var ballNum = Math.floor((Math.random() * ballBank.length));
        while (ballBank[ballNum].selected) { // we might select a ball that has already been picked. if so lets try again. 
            ballNum = Math.floor((Math.random() * ballBank.length));
        }
        ballBank[ballNum].selected = true;
    };
    var generateNumbers = function () {
        var i = 0;
        for (i = 0; i < selectBallCount; ++i) {
            pickBall();
        }
    };

    var selectColour = function (ballNum) {
        if (ballNum < 1 || ballNum > 41) {// I have included the facility to select the range of balls however the spec does not currently support this. 
            // if the range of input balls is changed this should be changed.
            console.log("selected ball out of range:" + ballNum);
        }
        //1-9 grey, 10-19 blue, 20-29, pink, 30-39 green, 40-49 yellow.
        return ["grey", "blue", "pink", "green", "yellow"][Math.floor(ballNum / 10)];
    }

    var displayNumbers = function () {
        var i = 0;
        results.empty();
        for (i = 0; i < totalBallCount; ++i) {
            if (ballBank[i].selected) {
                var colour = selectColour(ballBank[i].number);
                results.append("<span class='ball " + colour + "'>" + ballBank[i].number + "<span>");
            }
        }
    };
    return {
        init: function (btn_, selectBallCount_, results_) {
            selectBallCount = selectBallCount_;
            results = results_;
            btn_.on("click", function () {
                var i = 0;
                resetBallBank();
                generateNumbers();
                displayNumbers();
            });
        }

    };
}