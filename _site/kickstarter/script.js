var cityVotes = [
    {
        "city" : "Austin",
        "state" : "TX",
        "numberOfVotes" : "3"
    },
    {
        "city" : "Atlanta",
        "state" : "GA",
        "numberOfVotes" : "2"
    },
    {
        "city" : "Charlotte",
        "state" : "NC",
        "numberOfVotes" : "1"
    },
    {
        "city" : "Las Vegas",
        "state" : "NV",
        "numberOfVotes" : "1"
    },
    {
        "city" : "Seattle",
        "state" : "WA",
        "numberOfVotes" : "1"
    },
    {
        "city" : "Baltimore",
        "state" : "MD",
        "numberOfVotes" : "1"
    },
    {
        "city" : "San Antonio",
        "state" : "TX",
        "numberOfVotes" : "1"
    },
    {
        "city" : "Minneapolis",
        "state" : "MN",
        "numberOfVotes" : "1"
    }

];



function leaderBoard(){
    var i;
    row = '';

    for(i = 0; i < cityVotes.length; i++) {
        cityItem = cityVotes[i];
        cityName = cityItem['city'];
        cityState = cityItem['state'];
        numberOfVotes = cityItem['numberOfVotes'];


    row += '<div class="col-sm-3 col-sm-offset-3"><p>' + cityName + ', ' + cityState + '</p></div><div class="col-sm-3 votes"><p>' + numberOfVotes + '</p></div>';
    var leaderWrapper = document.getElementById('leader-board');
        leaderWrapper.innerHTML = row;
    }


}

leaderBoard();
