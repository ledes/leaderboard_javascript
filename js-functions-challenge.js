var gameInfo, team, teamConstructor, score, arrayOfTeams, teams_score, sort_method, prettyBox


gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

teamConstructor = function(){
  teamNames =[];
  for(var i = 0; i < gameInfo().length; i++){
      var team1 ={
        name: gameInfo()[i].home_team,
        rank: 0,
        wins: 0,
        losses: 0
      };
      var team2 ={
      name: gameInfo()[i].away_team,
      rank: 0,
      wins: 0,
      losses: 0
    };
    arrayOfTeams(team1);
    arrayOfTeams(team2);
  };
    teams_score();
    sort_method();
    rank();
    return prettyBox();
};

arrayOfTeams = function(team){
  var teamFlag = true
    for (var i = 0; i < teamNames.length; i++) {
      if( teamNames[i].name == team.name){
        teamFlag = false;
      }
    }
   if (teamFlag){
     teamNames.push(team)
   };
}

teams_score = function(){
  for(var i = 0; i < gameInfo().length; i++){
    if (gameInfo()[i].home_score > gameInfo()[i].away_score){
      var winner = gameInfo()[i].home_team;
      var losser = gameInfo()[i].away_team;
    }else{
       winner = gameInfo()[i].away_team;
       losser = gameInfo()[i].home_team;
    }
    for(var j = 0; j < teamNames.length; j++){
      if (teamNames[j].name == winner){
        teamNames[j].wins++;
      }
      if (teamNames[j].name == losser){
        teamNames[j].losses++;
      }
    }
  }
}

sort_method = function(){
  teamNames.sort(function(x, y){
    return x.losses-y.losses;
  });
}


rank = function(){
  var n = 1;
  for (var i = 0; i < teamNames.length; i++) {
    teamNames[i].rank += n;
    n++;
  };
}

prettyBox = function(){
  var summary = "";
      summary +="--------------------------------------------\n";
      summary +=  "| Names" + "      " + "Rank"+"      "+ "Wins"+ "      " + "Losses |\n"

      for (var i = 0; i < teamNames.length; i++) {
        summary += "| " + teamNames[i].name +  "         "  + teamNames[i].rank + "         " +  teamNames[i].wins  +  "         "  + teamNames[i].losses + "|\n"
      }
      summary +="--------------------------------------------";
  return summary;
}



console.log(teamConstructor())
