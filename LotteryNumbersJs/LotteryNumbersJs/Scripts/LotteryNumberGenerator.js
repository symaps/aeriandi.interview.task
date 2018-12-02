var numberGenerator = function() {
    var _ballBank = []; // all the available balls. Balls can be in one of two states not selected or selected. This is analogus to being inside the ball machine or on the display rack.
    var _resetBallBank = function () {
        var i = 0;
        var _totalBallCount = 49;
        _ballBank = [];
        for (i = 0; i < _totalBallCount; ++i) {
            _ballBank.push({ number: i + 1, selected: false });
        }
    };
    return {
        init: function () {
            
            _resetBallBank();
        }

    };
}