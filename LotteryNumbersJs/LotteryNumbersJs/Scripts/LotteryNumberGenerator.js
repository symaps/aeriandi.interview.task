var numberGenerator = function() {
    var ballBank = []; // all the available balls. Balls can be in one of two states not selected or selected. This is analogus to being inside the ball machine or on the display rack.
    var resetBallBank = function () {
        var i = 0;
        var totalBallCount = 49;
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
    return {
        init: function (btn_, selectBallCount_) {
            selectBallCount = selectBallCount_;
            btn_.on("click", function () {
                var i = 0;
                resetBallBank();
                generateNumbers();
            });
        }

    };
}