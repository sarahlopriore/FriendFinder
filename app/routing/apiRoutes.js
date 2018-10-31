var express = require("express");
var path = require("path");

var friends = require("../data/friends");

var router = express.Router();

router.get("/api/friends", function(req, res){
    res.json(friends);
})


router.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);

    var newScores = newFriend.scores;
    newScores = newScores.map(Number);
    // console.log(newScores);


        var newTotal = 0;
        newScores.forEach(function(x) {
            newTotal += x;
        })
        console.log(newTotal);


        var scoreArray = [];

        for (i = 0; i < friends.length; i++) {
            var userScores = friends[i].scores;
            userScores = userScores.map(Number);
            console.log(userScores);
    
            var userTotal = 0;
            userScores.forEach(function(x) {
                userTotal += x;
            })
            // console.log(userTotal);

            scoreArray.push(userTotal);
        }
        console.log(scoreArray);

        var closest = function(array, num) {
            var i = 0;
            var minDiff = 1000;
            var ans;
            for (i in array) {
                var m = Math.abs(num - array[i]);
                if (m < minDiff) {
                    minDiff = m;
                    ans = array[i];
                }
            }
            return ans;
        }

        var answer = closest(scoreArray, newTotal);
        console.log(answer);
        var index = scoreArray.indexOf(answer);


    friends.push(newFriend);
    res.json(friends[index]);
})




module.exports = router