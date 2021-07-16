const team = {
    _players : [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    }],
    _games : [{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
       let player = {
           firstName: firstName,
           lastName: lastName,
           age: age
       };
       this.players.push(player);
    },
   addGame(opponentN,teamP,oppPts){
      let game = {
       opponent: opponentN,
       teamPoints: teamP,
       opponentPoints: oppPts,
     };
     this.games.push(game);
   }
   };
   team.addPlayer('Steph', 'Curry', 'Age 28');
   team.addPlayer('Lisa', 'Leslie', 'Age 44');
   team.addPlayer('Bugs', 'Bunny', 'Age 76');
   
   console.log(team.players)
   
   team.addGame('Warriors', 100, 98);
   
   console.log(team.games)
   