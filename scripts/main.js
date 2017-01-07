$(document).ready(function() {
    $("#btn").on("click", function() {
        var dice1 = Math.floor((Math.random() * 6) + 1);
        var dice2 = Math.floor((Math.random() * 6) + 1);

        $("h1").text("Трясём трясём трясём...");
        shakeTitle();
        setTimeout(function() {
            $("#message").text("Итого: " + (dice1 + dice2));
            displayShakeResult('#dice1', dice1);
            displayShakeResult('#dice2', dice2);
        }, 740);
    });

    function shakeTitle() {
        $("h1").addClass("shake");
        setTimeout(function() {
            $("h1").removeClass("shake");
        }, 1000);
        return false;
    }

    function displayShakeResult(diceId, numOnDice) {
        var all = $(diceId + ">span");
        var dot1 = $(diceId + ">#dot1");
        var dot2 = $(diceId + ">#dot2");
        var dot3 = $(diceId + ">#dot3");
        var dot4 = $(diceId + ">#dot4");
        var dot5 = $(diceId + ">#dot5");
        var dot6 = $(diceId + ">#dot6");
        var dot7 = $(diceId + ">#dot7");

        switch (numOnDice) {
            case 1:
                $(all).hide();
                $(dot7).show();
                break;
            case 2:
                $(all).hide();
                $(dot1).show();
                $(dot6).show();
                break;
            case 3:
                $(all).hide();
                $(dot1).show();
                $(dot7).show();
                $(dot6).show();
                break;
            case 4:
                $(all).show();
                $(dot2).hide();
                $(dot5).hide();
                $(dot7).hide();
                break;
            case 5:
                $(all).show();
                $(dot2).hide();
                $(dot5).hide();
                break;
            case 6:
                $(all).show();
                $(dot7).hide();
                break
        }
    }
});
