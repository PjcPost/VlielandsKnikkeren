"use strict";

//server settings
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

serv.listen(3000);
console.log("Server has started");

//positions array position number [type, X, Y]
var positions = {
    hom1:['homeGreen',226.7,224],
    hom2:['homeGreen',202.7,199.3],
    hom3:['homeGreen',180,174],
    hom4:['homeGreen',153.3,152],
    hom5:['homeYellow',694,225.3],
    hom6:['homeYellow',718,201.3],
    hom7:['homeYellow',744,178.7],
    hom8:['homeYellow',765.3,152],
    hom9:['homeBlue',691.3,692.7],
    hom10:['homeBlue',716,716.7],
    hom11:['homeBlue',738.7,742.7],
    hom12:['homeBlue',765.3,764],
    hom13:['homeRed',224.7,690],
    hom14:['homeRed',200.7,714.7],
    hom15:['homeRed',174.7,738],
    hom16:['homeRed',152.7,764],
    pos1:['startGreen',35.3,389.3],
    pos2:['normal',82,385.3],
    pos3:['normal',128,376],
    pos4:['normal',170.7,362],
    pos5:['normal',212.7,341.3],
    pos6:['normal',252,315.3],
    pos7:['normal',286.7,284.7],
    pos8:['normal',317.3,250],
    pos9:['normal',342.7,211.3],
    pos10:['normal',364,170],
    pos11:['normal',378,126],
    pos12:['normal',388.7,80],
    pos13:['white',390,34],
    pos14:['white',424.7,34],
    pos15:['white-yellow',458.7,34],
    pos16:['white',493.3,34],
    pos17:['startYellow',527.5,34],
    pos18:['normal',531.5,80.5],
    pos19:['normal',540,126],
    pos20:['normal',555,170],
    pos21:['normal',575.5,211.5],
    pos22:['normal',601,250],
    pos23:['normal',632.5,285],
    pos24:['normal',667,316.5],
    pos25:['normal',706,342],
    pos26:['normal',747.5,362.5],
    pos27:['normal',791.5,378],
    pos28:['normal',837,386.5],
    pos29:['white',883,389],
    pos30:['white',883,424],
    pos31:['white-Blue',883,458.5],
    pos32:['white',833.5,493],
    pos33:['startBlue',883,527],
    pos34:['normal',836.5,529.5],
    pos35:['normal',791.5,538.5],
    pos36:['normal',747.5,554],
    pos37:['normal',706,574.5],
    pos38:['normal',667,600.5],
    pos39:['normal',632.5,630.5],
    pos40:['normal',601.5,666],
    pos41:['normal',576,704],
    pos42:['normal',555,745.5],
    pos43:['normal',540.5,790],
    pos44:['normal',531,835],
    pos45:['white',528,882],
    pos46:['white',494,883],
    pos47:['white-Red',459,882.5],
    pos48:['white',424.5,882.5],
    pos49:['startRed',390,882],
    pos50:['normal',388,835.5],
    pos51:['normal',378.5,790],
    pos52:['normal',363,746.5],
    pos53:['normal',342.5,704.5],
    pos54:['normal',318,666],
    pos55:['normal',286,630.5],
    pos56:['normal',251.5,600],
    pos57:['nomal',212.2,574.5],
    pos58:['normal',171.5,554],
    pos59:['normal',127,539],
    pos60:['normal',82,529.5],
    pos61:['white',36,526.5],
    pos62:['white',35,493],
    pos63:['white-Green',34.5,458.5],
    pos64:['white',35,424],
    GreenSafe1:['safe',69.5,458],
    GreenSafe2:['safe',103.5,458],
    GreenSafe3:['safe',138,457.5],
    GreenSafe2:['safe',173,458],
};

//Set up all the mables
var marbles = {
    marble1: {
            player		: 'player1',
            positionName: 'hom1',
            positionX	: '226.7',
            positionY	: '224',
            color   	: '#00d018',
        },
    marble2: {
            player		: 'player1',
            positionName: 'hom2',
            positionX	: '202.7',
            positionY	: '199.3',
            color   	: '#00d018',
        },
	marble3: {
            player		: 'player1',
            positionName: 'hom3',
            positionX	: '180',
            positionY	: '174',
            color   	: '#00d018',
        },
	marble4: {
            player		: 'player1',
            positionName: 'pos1',
            positionX	: '35.3',
            positionY	: '389.3',
            color   	: '#00d018',
        },
	marble5: {
            player		: 'player2',
            positionName: 'hom5',
            positionX	: '694',
            positionY	: '225.3',
            color   	: '#fdff00',
        },
	marble6: {
            player		: 'player2',
            positionName: 'hom6',
            positionX	: '718',
            positionY	: '201.3',
            color   	: '#fdff00',
        },
	marble7: {
            player		: 'player2',
            positionName: 'hom7',
            positionX	: '744',
            positionY	: '178.7',
            color   	: '#fdff00',
        },
	marble8: {
            player		: 'player2',
            positionName: 'pos17',
            positionX	: '527.',
            positionY	: '34',
            color   	: '#fdff00',
        },
	marble9: {
            player		: 'player3',
            positionName: 'hom9',
            positionX	: '691.3',
            positionY	: '692.7',
            color   	: '#0700d0',
        },
	marble10: {
            player		: 'player3',
            positionName: 'hom10',
            positionX	: '716',
            positionY	: '716.7',
            color   	: '#0700d0',
        },
	marble11: {
            player		: 'player3',
            positionName: 'hom11',
            positionX	: '738.7',
            positionY	: '742.7',
            color   	: '#0700d0',
        },
	marble12: {
            player		: 'player3',
            positionName: 'pos33',
            positionX	: '883',
            positionY	: '527',
            color   	: '#0700d0',
        },
	marble13: {
            player		: 'player4',
            positionName: 'hom13',
            positionX	: '224.7',
            positionY	: '690',
            color   	: '#ff0000',
        },
	marble14: {
            player		: 'player4',
            positionName: 'hom14',
            positionX	: '200.7',
            positionY	: '714.7',
            color   	: '#ff0000',
        },
	marble15: {
            player		: 'player4',
            positionName: 'hom15',
            positionX	: '174.7',
            positionY	: '738',
            color   : '#ff0000',
        },
	marble16: {
            player		: 'player4',
            positionName: 'pos49',
            positionX	: '390',
            positionY	: '882',
            color   : '#ff0000',
        },
};


//set up all the users (Should be in a database)
var users = {
	paul: {
		username:	"paul",
		pass	:	"asd",
		id		:	'',
		cards   :	['','','','',''],
		handSize: 	5,
		turn    : 	true,
	},
	paul2: {
		username:	"paul2",
		pass	:	"asd",
		id		:	'',
		cards   :	['','','','',''],
		handSize: 	5,
		turn    : 	false,
	},
	paul3: {
		username:	"paul3",
		pass	:	"asd",
		id		:	'',
		cards   :	['','','','',''],
		handSize: 	5,
		turn    : 	false,
	},
	paul4: {
		username:	"paul4",
		pass	:	"asd",
		id		:	'',
		cards   :	['','','','',''],
		handSize: 	5,
		turn    : 	false,
	},
	paul5: {
		username:	"paul5",
		pass	:	"asd",
		id		:	'',
		cards   :	['','','','',''],
		handSize: 	5,
		turn    : 	false,
	},
};

//User login / register  functions
var isValidPassword = function(data){
    return users[data.username].pass === data.password;
}

var isUsernameTaken = function(data){
    return users[data.username];
}

var addUser = function(data){
    users[data.username].pass = data.password;
    console.log(data.password);
}

var updateUserSocketId = function(socketId, username){
	users[username].id = socketId;
	checkForUserRoom(username, true);
}


//check if the user is in a room
var rooms = [];

var room = [];

var checkForUserRoom = function(username, UserLoggedIn) {
	//If no rooms created go to addToRoom and stop this script
	if(rooms[0] === undefined){
		addToRoom(username);
		return;
	}
	
	//check all rooms if users is in one of them.
	var i = 0;
	do{
		var j = 0
		do{
			if(rooms[i][j].username === username){
				var playerNumber = j;
				//check if user logged in or function is called somewhere else.
				if(UserLoggedIn === true){
					console.log('User is added to old roomnumber ' + i + ' his player number is ' + playerNumber);
					return;
				}
				else{
					return i;
				}
			}
			j++
		} while(j <= rooms[i].length -1)
		i++
	} while(i <= rooms.length -1);
	
	//if user is not in room run add to room.
	addToRoom(username);
}


//add user to group
var roomId;

function addToRoom(username) {
	
	//if no rooms are set create first room
	if(rooms[0] === undefined){
		roomId = 0;
		var usedCards = [];
		room.push(usedCards),
		room.push(users[username]);
	}
	else{
		//check if current room is full or not (1 array for used cards and 4 for players)
		if(rooms[roomId].length !== 5){
			room.push(users[username]);
		}
		else{
			room=[];
			var usedCards = [];
			room.push(usedCards),
			room.push(users[username]);
			roomId =+ 1;
			console.log('Room '+ roomId +' is full.');
		}
	}
	
	rooms[roomId] = room;

	handGeneration(username, 5);
}

//create cards
var cardDeck = {};
var cardsDeckCreation = function(){
    var number = 1;
    var cardName;
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 14; j++){
            cardName = "card" + number;
            cardDeck[cardName] = {
            value: '',
            image: i + "_" + j,
            };
            if(j < 11 && j !== 1 && j !== 4){
                cardDeck[cardName].value = "" + j;
            }
            else if (j == 11){
                cardDeck[cardName].value = "jack";
            }
            else if (j == 12){
                cardDeck[cardName].value = "queen";
            }
            else if (j == 13){
                cardDeck[cardName].value = "king";
            }
            else if (j === 1){
                cardDeck[cardName].value = "ace";
            }
            else if (j === 4){
                cardDeck[cardName].value = -4;
            }
            number ++;
        }
    }
}
cardsDeckCreation();


//Create hand of cards
var handGeneration = function(username,numberOfCards){

	//get roomnumber
	var roomNumber = checkForUserRoom(username, false);

    for(var i = 0; i < numberOfCards; i++){
        users[username].cards[i] = generateOneCard();
    }

    function generateOneCard() {

        var randomnumber;

        if(rooms[roomNumber][0].length !== 52){
            do {
                randomnumber = Math.floor(Math.random() * 52) + 1;
            }
            while (rooms[roomNumber][0].indexOf(randomnumber) !== -1);
            rooms[roomNumber][0].push(randomnumber);
            return randomnumber;
        }
        else{
            console.log('All cards used, reset cards');
			rooms[roomNumber][0] = [];
        }
    }

    cardPossibility(username);
};

//Whose turn is it
var UserTurn = function(username){
	var roomNumber = checkForUserRoom(username, false);

	var i = 1;
	do{
		if(rooms[roomNumber][i].turn === true){
			var playerNumber = i;
			if(playerNumber === 4){
				rooms[roomNumber][4].turn = false;
				rooms[roomNumber][1].turn = true;
				return;
			}
			else{
				rooms[roomNumber][i].turn = false;
				var newPlayerNumber = i + 1;
				rooms[roomNumber][newPlayerNumber].turn = true;
				return;
			}
		}
		i++
	} while(i <= rooms[roomNumber].length -1)

};


//Card possibility
var cardPossibility = function(username){
    //get player number
    var playername = userPlayerNumber(username);

    //check for Ace or King
    var KingOrAce = false;

    for(var i in users[username].cards){
        var cardNumber = 'card' + users[username].cards[i];
        var cardValue = cardDeck[cardNumber].value;
        if(cardValue === 'ace' || cardValue === 'king'){
            KingOrAce = true;
        }
    }

    //get posible marbles from the user (only check for ace or king)
    var possibleMarbles = {};

    for(var i in marbles){
        if(marbles[i].player === playername){
            if(marbles[i].positionName.substring(-1, 3) === 'hom' && KingOrAce === false){
                //do nothing
            }
            else{
                possibleMarbles[i] = marbles[i];
            }
        }
    }

    //check every card to every posible marble
    var failedCards = [];

    for(var i in possibleMarbles){
        var positionName = possibleMarbles[i].positionName;
        var idOfFailedCard = 1;

        for(var j in users[username].cards){
            if(calculateNewPosition(users[username].cards[j].cardValue, positionName) === false){
                failedCards.push({
                    id: idOfFailedCard,
                    cardValue   : users[username].cards[j].cardValue,
                    cardName    : users[username].cards[j].cardNumber,
                    cardArrayNr : j,
                });
            }
            idOfFailedCard ++;
        }
    }
    
    //count the amount of failed cards
    var counts = {};

    for(var i = 0; i< failedCards.length; i++) {
        var num = failedCards[i].id;
        counts[num] = counts[num] ? counts[num]+1 : 1;
    }

    for(var i = 1; i< 5; i++){
        if(counts[i] !== undefined && counts[i] === 4){
            var playerCardName = failedCards[i-1].cardArrayNr;
            //set card to impossible
            var cardImposible = failedCards[i-1].cardName + '*';
            users[username].cards[playerCardName] = cardImposible;
            console.log(cardImposible);
        }
    }
    
    possibleMarblesMAIN = possibleMarbles;
};

var calculateNewPosition = function(cardValue, marblePositionName){
    var NewMarblePositionName;
	
	//check if marbles on board are on "no passage" positions
    var marblesOnWhites = [];
    
    for(i in marbles){
        if(marbles[i].posName === 'pos1' || marbles[i].posName === 'pos13' || marbles[i].posName === 'pos14' || marbles[i].posName === 'pos15' || marbles[i].posName === 'pos16' || marbles[i].posName === 'pos17' ||marbles[i].posName === 'pos29' ||marbles[i].posName === 'pos30' ||marbles[i].posName === 'pos31' ||marbles[i].posName === 'pos32' ||marbles[i].posName === 'pos33' ||marbles[i].posName === 'pos45' || marbles[i].posName === 'pos46' ||marbles[i].posName === 'pos47' ||marbles[i].posName === 'pos48' ||marbles[i].posName === 'pos49' ||marbles[i].posName === 'pos61' ||marbles[i].posName === 'pos62' ||marbles[i].posName === 'pos63' ||marbles[i].posName === 'pos64'){
            marblesOnWhites.push(marbles[i].posName.slice(3));
        }
    }

    if(marblePositionName.substr(0, 3) === 'hom'){
        if(cardValue === 'ace' || cardValue === 'king'){

             for(var i in marbles){
                if(marbles[i].positionName === marblePositionName){
                var colorCodeOfMarble = marbles[i].color;
                
                switch(colorCodeOfMarble){
                    case '#00d018':
                        NewMarblePositionName = 'pos1';
                        break;
                    case '#fdff00':
                        NewMarblePositionName = 'pos17';
                        break;
                    case '#0700d0':
                        NewMarblePositionName = 'pos33';
                        break;
                    case '#ff0000':
                        NewMarblePositionName = 'pos49';
                        break;
                    }
                }
            }
        }
        else{
            NewMarblePositionName = false;
        }
    }
    else{
        //get card value
        var movement;
        switch (cardValue){
            case 'ace':
                movement = 1;
                break;
            case 'jack':
                movement = 11;
                break;
            case 'queen':
                movement = 12;
                break;
            case 'king':
                movement = 1;
                break;
            default:
                movement = parseInt(cardValue);
                break;
        }
        
        //calculate new position and set from position 64 to 1
        var marblePositionNumber = parseInt(marblePositionName.slice(3));
        if(movement > 0){
            for(var i = 0; i < movement; i++){
                if(marblePositionNumber === 64){
                        marblePositionNumber = 0;
                }
                marblePositionNumber ++;
                for(j in marblesOnWhites){
                    if(marblePositionNumber == marblesOnWhites[j]){
                        NewMarblePositionName = false;
                        return NewMarblePositionName;
                    }
                }

            }
        }
        else{
            for(var i = 0; i > movement; i--){
                if(marblePositionNumber === 0){
                        marblePositionNumber = 64;
                    }
                    marblePositionNumber --;
            }
        }
        NewMarblePositionName = "pos" +  marblePositionNumber;
    }

	//check if position is already occipied;
    for(var j in marbles){
        if(NewMarblePositionName === marbles[j].positionName){
            if(marbles[j].positionName.substr(0,3) === 'hom'){
                NewMarblePositionName = false;
                return NewMarblePositionName;
            }
            else{
                NewMarblePositionName += 'KILL';
            }
        }
		else{
			
		}
    }
    return NewMarblePositionName;
}

//get user playerNumber
var userPlayerNumber = function(username){
    var roomNumber = checkForUserRoom(username, false);
	var i = 1;

	do{
		if(rooms[roomNumber][i].username === username){
            var playerNumber = 'player' + i;
            return playerNumber;
		}
		i++
	} while(i <= rooms[roomNumber].length -1)
}

var update = function(card, marble, socketId) {
	var username = getUsername(socketId);
	
	//get card value
	var cardValue = cardDeck[card].value;
	
	//get marble position
	
	
	calculateNewPosition(cardValue, marblePositionName);
	
	UserTurn(username);
}

var getUsername = function(socketId){
	var username;
	
	for(var i in rooms){
		for(var j in rooms[i]){
			if (rooms[i][j].id === socketId){
				username = rooms[i][j].username;
				return username;
			}
		}
	}
};



var possibleMarblesMAIN;		//TEMP SOLUTION FIX
var SOCKET_LIST = {};

var DEBUG = true;

//on connection
var io = require('socket.io')(serv, {});
io.sockets.on('connection', function (socket) {
    socket.id = Math.random();
	SOCKET_LIST[socket.id] = socket;
    
	//login
	socket.on('signIn', function (data) {
        if(isValidPassword(data)){
			updateUserSocketId(socket.id,data.username)
            socket.emit('signInResponse',{succes:true});
			socket.emit('sendPosition', marbles);
			socket.emit('cards', users[data.username], cardDeck);
            socket.emit('marbleClick', possibleMarblesMAIN);
        }
        else{
            socket.emit('signInResponse',{succes:false});
        }
    });

	socket.on('getCard', function(card,marble){
		update(card,marble,socket.id);
		for(var i in SOCKET_LIST){
			var username = getUsername(SOCKET_LIST[i]);
            SOCKET_LIST[i].emit('cards', users[data.username], cardDeck);
        }
	});

	//SignUp
    socket.on('signUp', function (data) {
        if(isUsernameTaken(data)){
            socket.emit('signUpResponse',{succes:false});
        }
        else{
            addUser(data);
            console.log('new user added');
            socket.emit('signUpResponse',{succes:true});
        }
    });
	
	//Text Messages
	socket.on('sendMsgToServer', function (data) {
        var playerName = ("" + socket.id).slice(2,7);
        for(var i in SOCKET_LIST){
            SOCKET_LIST[i].emit('addToChat',playerName + ': ' + data);
        }
    });
    
    socket.on('evalServer', function (data) {
        if(!DEBUG)
            return;

        var res = eval(data);
        socket.emit('evalAnswer', res);
    });
    
});
