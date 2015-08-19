var gameInfo, team, teamConstructor, score


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


// first we create the teams
// we include the teams in array.
// iterate through your array and output the name,
// number of wins, and number of losses for each team.


teamNames =[];

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

teamConstructor = function(){

for(var i = 0; i < gameInfo().length; i++){
    var team1 ={
      name: gameInfo()[i].home_team,
      rank: [],
      wins: 0,
      losses: 0
    };
    var team2 ={
    name: gameInfo()[i].away_team,
    rank: [],
    wins: 0,
    losses: 0
  };

  arrayOfTeams(team1);
  arrayOfTeams(team2);

};
  teams_score();
  return teamNames;
};


console.log(teamConstructor())






///extra work done:

// teamConstructor = function(){
//   var homeTeamNames =[];
//   var awayTeamNames = [];
//
//   for(var i = 0; i < gameInfo().length; i++){
//     var newTeam ={
//       name: gameInfo()[i].home_team,
//       rank: [],
//       wins: 0,
//       losses: 0
//     };
//     homeTeamNames.push(newTeam)
//   };
//
//   for(var i = 0; i < gameInfo().length; i++){
//     var newTeam ={
//     name: gameInfo()[i].away_team,
//     rank: [],
//     wins: 0,
//     losses: 0
//   };
//   awayTeamNames.push(newTeam)
//   };
//
//   for(var i = 0; i < gameInfo().length; i++){
//     if (gameInfo()[i].home_score > gameInfo()[i].away_score){
//         homeTeamNames[i].wins++;
//         awayTeamNames[i].losses++;
//
//     }else {
//       awayTeamNames[i].wins++;
//       homeTeamNames[i].losses++;
//     }
//   };
//   teamNames = homeTeamNames.concat(awayTeamNames);
//   return teamNames;
// };

//////////////
// teamConstructor = function(){
//   var teamNames =[];
// //gameInfo().length * 2.
//   for(var i = 0; i < gameInfo().length; i++){
//     var newTeam ={
//       name: gameInfo()[i].home_team,
//       rank: 0,
//       // if gameinfo name == teamNames and scores...++
//       wins: 0,
//       losses: 0
//     };
//     teamNames.push(newTeam)
//   };
//
//   return teamNames;
// };
////////////
//
// team = {
//   name: "",
//   rank: [],
//   wins: [],
//   losses: []
// };
//
// var teamNames =[];
//  teamConstructor = function(gameInfo){
//
//    for(var i = 0; i < gameInfo().length; i++){
//     // if (_.contains(teamNames, gameInfo){
//     //   count++;
//       // teamNames.push(gameInfo()[i].away_team);
//   // }else {
//     teamNames.push(gameInfo()[i].home_team);
//   // };
// };
//    return teamNames;
// };
//
// var arrayUnique = function(a) {
//    return a.reduce(function(p, c) {
//        if (p.indexOf(c) < 0) p.push(c);
//        return p;
//    }, []);
// };
//
// var new_arr = arrayUnique(teamNames);
// //
// // count =0
