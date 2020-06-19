window.onload = function () {
    var count = 0;
    var count2 = 0;
    var front = 1;
    var gameScore = 0;
    var gameStart = false;
    $("#gameArea").hide();

    // Function to find collision, update score and start and end game 
    setInterval(function () {
        if (gameStart) {
            gameScore++;
        }

        document.getElementById("gameScore").innerHTML = gameScore;
        if ($("#oppositeCar1").offset().left > $("#beanCar").offset().left && $("#oppositeCar1").offset().left < $("#beanCar").offset().left + $("#beanCar").width()) {
            if ($("#oppositeCar1").offset().top - $("#beanCar").offset().top > 64 && $("#oppositeCar1").offset().top - $("#beanCar").offset().top < 73) {
                alert("Collision! You lost");
                gameScore--;
                alert("Your Score: " + gameScore);
                gameScore = 0;
                gameStart = false;
                $("#animationArea").removeClass("move");
                $("#gameArea").hide();
                $("#startGame h2").show();
            }

        }
        if ($("#oppositeCar3").offset().left > $("#beanCar").offset().left && $("#oppositeCar3").offset().left < $("#beanCar").offset().left + $("#beanCar").width()) {
            if ($("#oppositeCar3").offset().top - $("#beanCar").offset().top > 64 && $("#oppositeCar3").offset().top - $("#beanCar").offset().top < 73) {
                alert("Collision! You lost");
                gameScore--;
                alert("Your Score: " + gameScore);
                gameScore = 0;
                gameStart = false;
                $("#animationArea").removeClass("move");
                $("#gameArea").hide();
                $("#startGame h2").show();
            }

        }

        if ($("#oppositeCar2").offset().left > $("#beanCar").offset().left && $("#oppositeCar2").offset().left < $("#beanCar").offset().left + $("#beanCar").width()) {
            if ($("#oppositeCar2").offset().top - $("#beanCar").offset().top > 15 && $("#oppositeCar2").offset().top - $("#beanCar").offset().top < 40) {
                alert("Collision! You lost");
                gameScore--;
                alert("Your Score: " + gameScore);
                gameScore = 0;
                gameStart = false;
                $("#animationArea").removeClass("move");
                $("#gameArea").hide();
                $("#startGame h2").show();
            }
        }
    }, 100)

    //Keyboard events handling for Enter,Space, Up and Down keys
    $(document).on('keydown', function (e) {
        if (e.which == 13) {
            $("#animationArea").addClass("move");
            $("#gameArea").show(1000);
            $("#startGame h2").hide();
            gameStart = true;

        }
        if (e.which == 38) {
            $("#beanCar").css("top", "260px");
        }
        if (e.which == 40) {
            $("#beanCar").css("top", "320px");
        }
        if (e.which == 32) {
            count++;
            if (count % 2 != 0) {
                if (front == 1) {
                    $("#beanCar").removeClass();
                    $("#beanCar").addClass("frontJump1");
                } else if (front == 0) {
                    $("#beanCar").removeClass();
                    $("#beanCar").addClass("backJump1");
                } else {
                    $("#beanCar").removeClass();
                    $("#beanCar").addClass("normalJump1");
                }
            } else {
                if (front == 1) {
                    $("#beanCar").removeClass();
                    $("#beanCar").addClass("frontJump2");
                } else if (front == 0) {
                    $("#beanCar").removeClass();
                    $("#beanCar").addClass("backJump2");
                } else {
                    $("#beanCar").removeClass();
                    $("#beanCar").addClass("normalJump2");
                }
            }
        }
    });

    $("#front").click(function () {
        front = 1;
    })
    $("#back").click(function () {
        front = 0;
    })
    $("#normal").click(function () {
        front = -1;
    })
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
    }

    if (e.keyCode == 38 && e.target == document.body) {
        e.preventDefault();
    }

    if (e.keyCode == 40 && e.target == document.body) {
        e.preventDefault();
    }
});
