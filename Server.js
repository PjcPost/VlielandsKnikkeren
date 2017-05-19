"use strict";

//server settings
var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/client.html');
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
    pos32:['white',883.5,493],
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
    GrS1:['GreenSafe1',69.5,458],
    GrS2:['GreenSafe2',103.5,458],
    GrS3:['GreenSafe3',138,457.5],
    GrS4:['GreenSafe4',173,458],
    YlS1:['YellowSafe1',459,68.8],
    YlS2:['YellowSafe2',459,102.3],
    YlS3:['YellowSafe3',459,137.3],
    YlS4:['YellowSafe4',459,172.3],
    BlS1:['BlueSafe1',848.7,458],
    BlS2:['BlueSafe2',814.5,458],
    BlS3:['BlueSafe3',780.2,458],
    BlS4:['BlueSafe4',745.8,458],
    RdS1:['RedSafe1',459.5,847.5],
    RdS2:['RedSafe2',459.3,813.6],
    RdS3:['RedSafe3',459.3,778.9],
    RdS4:['RedSafe4',459.5,744.7],
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
                    cardPossibility(username);
                    return i;
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
        if(rooms[roomNumber][i].turn === undefined){
            console.log('please log in new player');
        }
		else if(rooms[roomNumber][i].turn === true){
			var playerNumber = i;
			if(playerNumber === 4){
				rooms[roomNumber][4].turn = false;
				rooms[roomNumber][1].turn = true;
                console.log('newplayer number = 1');
				return rooms[roomNumber][1].username;
			}
			else{
				rooms[roomNumber][i].turn = false;
				var newPlayerNumber = i + 1;
				console.log('newplayer number = ' + newPlayerNumber);
                console.log(' ');
				rooms[roomNumber][newPlayerNumber].turn = true;
				return rooms[roomNumber][newPlayerNumber].username;
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
    var emptyCard = 0;

    for(var i in users[username].cards){
        if(users[username].cards[i] !== ''){
            var cardNumber = 'card' + users[username].cards[i];
            if(cardNumber.slice(-1) === '*'){
                cardNumber = cardNumber.slice(0, -1);
                users[username].cards[i] = users[username].cards[i].slice(0, -1);
            }
            var cardValue = cardDeck[cardNumber].value;
            if(cardValue === 'ace' || cardValue === 'king'){
                KingOrAce = true;
            }
        }
        else{
            emptyCard ++;
            if(emptyCard === 5 && users[username].turn === true){
                console.log('This user has no cards')
                users[username].handSize --;
                if (users[username].handSize === 0){
                    handGeneration(username, 4);
                    users[username].handSize = 4;
                }
                return UserTurn(username);
            }
        }
    }

    //get posible marbles from the user (only check for ace or king)
    var possibleMarbles = {};
    var unpossibleMarbles = 0;
    for(var i in marbles){
        if(marbles[i].player === playername){
            if(marbles[i].positionName.substring(-1, 3) === 'hom' && KingOrAce === false){
                unpossibleMarbles ++;
                if(unpossibleMarbles === 4 && users[username].turn === true){
                    console.log('No possible Marbles this turn');
                    for(var i = 0; i < 5; i++){
                        users[username].cards[i] = '';
                    }
                    users[username].handSize --;
                    if (users[username].handSize === 0){
                        handGeneration(username, 4);
                        users[username].handSize = 4;
                    }
                    return UserTurn(username); 
                }
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
        var marbleName = i;
        var idOfFailedCard = 1;
        var cardsFailedForOneMarble;

        for(var j in users[username].cards){
			var cardName = 'card' + users[username].cards[j];
            cardsFailedForOneMarble = 0;
			if(users[username].cards[j] !== ''){
				if(calculateNewPosition(cardDeck[cardName].value, positionName) === false){
					failedCards.push({
						id: idOfFailedCard,
						cardValue   : cardDeck[cardName].value,
						cardName    : users[username].cards[j],
						cardArrayNr : j,
					});
                    cardsFailedForOneMarble ++;
					//console.log('Card ' + cardDeck[cardName].value + ' is not possible for ' + possibleMarbles[i].positionName);
				}
			}
            else{
                cardsFailedForOneMarble ++;
            }
            idOfFailedCard ++;
            if(cardsFailedForOneMarble === 5){
                delete possibleMarbles[marbleName];
            }
        }
    }

    console.log(username);
    //console.log(failedCards);
    //console.log(Object.keys(possibleMarbles).length);
    
    var id1 = 0;
    var id2 = 0;
    var id3 = 0;
    var id4 = 0;
    var id5 = 0;

    for(var i = 0; i < 32; i ++){                           //Check for loop number!!!  loop number now = max 8 marbles * 4 cards= 32
        if(failedCards[i] !== undefined){
            if(failedCards[i].id === 1){
                id1++
                if(id1 == Object.keys(possibleMarbles).length){
                    var playerCardName = failedCards[i].cardArrayNr;
                    var cardImposible = failedCards[i].cardName + '*';
                    users[username].cards[playerCardName] = cardImposible;
                    console.log('this card is impossible : ' + cardImposible);
                }
            }
            else if(failedCards[i].id === 2){
                id2++
                if(id2 == Object.keys(possibleMarbles).length){
                    var playerCardName = failedCards[i].cardArrayNr;
                    var cardImposible = failedCards[i].cardName + '*';
                    users[username].cards[playerCardName] = cardImposible;
                    console.log('this card is impossible : ' + cardImposible);
                }
            }
            else if(failedCards[i].id === 3){
                id3++
                if(id3 == Object.keys(possibleMarbles).length){
                    var playerCardName = failedCards[i].cardArrayNr;
                    var cardImposible = failedCards[i].cardName + '*';
                    users[username].cards[playerCardName] = cardImposible;
                    console.log('this card is impossible : ' + cardImposible);
                }
            }
            else if(failedCards[i].id === 3){
                id3++
                if(id3 == Object.keys(possibleMarbles).length){
                    var playerCardName = failedCards[i].cardArrayNr;
                    var cardImposible = failedCards[i].cardName + '*';
                    users[username].cards[playerCardName] = cardImposible;
                    console.log('this card is impossible : ' + cardImposible);
                }
            }
            else if(failedCards[i].id === 4){
                id4++
                if(id4 == Object.keys(possibleMarbles).length){
                    var playerCardName = failedCards[i].cardArrayNr;
                    var cardImposible = failedCards[i].cardName + '*';
                    users[username].cards[playerCardName] = cardImposible;
                    console.log('this card is impossible : ' + cardImposible);
                }
            }
            else if(failedCards[i].id === 5){
                id5++
                if(id5 == Object.keys(possibleMarbles).length){
                    var playerCardName = failedCards[i].cardArrayNr;
                    var cardImposible = failedCards[i].cardName + '*';
                    users[username].cards[playerCardName] = cardImposible;
                    console.log('this card is impossible : ' + cardImposible);
                }
            }
        }
    }

    //check if 1 card is posible
    var impossibleCards = 0;

    for(var i = 0; i < 5; i++){
        var cardName = users[username].cards[i];
        if(cardName === ''){
            impossibleCards ++;
        }
        else if(typeof cardName === 'string' && cardName.slice(-1) === '*'){
            impossibleCards ++;
        }
    }

    //console.log('impossible cards = ' + impossibleCards);
    //if no cards are possible set all card to empty and end turn
    if(impossibleCards === 5 && users[username].turn === true){
        for(var i = 0; i < 5; i++){
            users[username].cards[i] = '';
        }
        console.log('No possible cards this turn');
        users[username].handSize --;
        if (users[username].handSize === 0){
            handGeneration(username, 4);
            users[username].handSize = 4;
        };
        return UserTurn(username);
    }

	//Possible marbles for click action.
    possibleMarblesMAIN = possibleMarbles;
	
}

var getMarbleByPositionName = function(marblePositionName){
    var MarbleObject;

    for(var i in marbles){
        if(marbles[i].positionName === marblePositionName){
            MarbleObject = marbles[i];
        }
    }
    return MarbleObject;
}

//function for trading places (Jack)
var getMarblesAvailableForSwitch = function(marblePositionName){
    var marble = getMarbleByPositionName(marblePositionName);
	var ownMarbles;
	
	//get marbles of player
	if(marble.color === '#00d018'){
		ownMarbles = [1,2,3,4];
	}
	else if(marble.color === '#fdff00'){
		ownMarbles = [5,6,7,8];
	}
	else if(marble.color === '#0700d0'){
		ownMarbles = [9,10,11,12];
	}
	else if(marble.color === '#ff0000'){
		ownMarbles = [13,14,15,16];
	}
	
	//get all marbles for trade
	var marbleOnOwnHome = getMarblesOnOwnStartPosition(marblesOnWhitesFunction());
	var marblesForTrade = {};
	var marblesOnBoard = getMarblesOnBoard();
	console.log('number of marbles on board are ' + Object.keys(marblesOnBoard).length);
	var boardCount = 1;
	
	for(var i in marbles){
		if(marbles[i].positionName.substr(0, 3) === 'pos' && marbles[i].positionName !== marblePositionName){
			var count = 0;
		
			for(var j in marbleOnOwnHome){
				if(marbles[i].positionName !== marbleOnOwnHome[j].positionName){
					count ++;
					if(count === marbleOnOwnHome.length){
						marblesForTrade[i] = marbles[i];
					}
				}
			}
			
			
			if(marbleOnOwnHome.length === 0){
				boardCount++;
				console.log('No marbles on home positions, times : ' + boardCount);
				if(boardCount >= Object.keys(marblesOnBoard).length){
					marblesForTrade[i] = marbles[i];
				}
			}
		}
	}
	
	//check if trade is posible
	console.log("object length is " + Object.keys(marblesForTrade).length)
	if(Object.keys(marblesForTrade).length > 0){
		console.log("trade possible");
	}
	else{
		console.log("trade impossible");
		//return false;
	}
	
	return marblesForTrade;
}

//get all marbles on the board
var getMarblesOnBoard = function(){
	var marblesOnBoard = {};
	
	for(var i in marbles){
		if(marbles[i].positionName.substr(0, 3) === 'pos'){
			marblesOnBoard[i] = marbles[i];
		}
	}
	
	return marblesOnBoard;
}

var getMarblesOnOwnStartPosition = function(marblesOnWhites){
    //marbles on white is just number
    var marbleOnWhitePosName;
    var marbleOnWhite;
    var marbleOnOwnHome = [];

    for(var j in marblesOnWhites){
        marbleOnWhitePosName = 'pos' + marblesOnWhites[j];
        marbleOnWhite = getMarbleByPositionName(marbleOnWhitePosName);
        //check if position name is equal to marble star color.
        if(marbleOnWhitePosName === 'pos1' && marbleOnWhite.color === '#00d018'){
            marbleOnOwnHome.push(marbleOnWhite);
        }
        else if(marbleOnWhitePosName === 'pos17' && marbleOnWhite.color === '#fdff00'){
            marbleOnOwnHome.push(marbleOnWhite);
        }
        else if(marbleOnWhitePosName === 'pos33' && marbleOnWhite.color === '#0700d0'){
            marbleOnOwnHome.push(marbleOnWhite);
        }
        else if(marbleOnWhitePosName === 'pos49' && marbleOnWhite.color === '#ff0000'){
            marbleOnOwnHome.push(marbleOnWhite);
        }
    }

    return marbleOnOwnHome;
}

var checkNewPosition = function(marblePositionNumber, movementLeft, marble){
    var newMarblePositionName = 'pos' + marblePositionNumber;
	
	var marblesOnWhites = marblesOnWhitesFunction();
    //check if position is on a white position or start position, if white position set Onwhite to true + Check is not walking over startposition occupied by startposition color.
    for(var j in marblesOnWhites){
        if(marblePositionNumber == marblesOnWhites[j]){
            var marblesOnOwnStartPosition = getMarblesOnOwnStartPosition(marblesOnWhites);
            
            for(var i in marblesOnOwnStartPosition){
                if(marblesOnOwnStartPosition[i].positionName.slice(3) === marblePositionNumber){
                    newMarblePositionName = false;
                    return newMarblePositionName;
                }
            }
            if(movementLeft > 0){
                console.log('Walking over white');
                newMarblePositionName = false;
                return newMarblePositionName;
            }
        }
    }

    //check if marble can walk into safe position.  ---Only if walking forward---
    if(movementLeft > 0){
        //Get marble color and set Walk in safe position name
        var walkIntoSafePosition;
        switch(marble.color){
        case '#00d018':
            walkIntoSafePosition = 'pos63';
            //console.log('player : 1');
            break;
        case '#fdff00':
            walkIntoSafePosition = 'pos15';
            //console.log('player : 2');
            break;
        case '#0700d0':
            walkIntoSafePosition = 'pos31';
            //console.log('player : 3');
            break;
        case '#ff0000':
            walkIntoSafePosition = 'pos47';
            //console.log('player : 4');
            break;
        }
        //console.log('Marble Position number : ' + newMarblePositionName);
        //console.log('Walk into safe is : ' + walkIntoSafePosition);

        if(newMarblePositionName === walkIntoSafePosition){
            console.log('Walking into safe');
            var marbleInSafe = moveInSafe(marble, movementLeft);
            if(marbleInSafe === false){
                //move in safe is impossible so return normal position
                console.log('move in safe impossible return : ' + newMarblePositionName.slice(3));
                return newMarblePositionName.slice(3);
            }
            else{
                newMarblePositionName = marbleInSafe;
                console.log('calculate new position = ' + newMarblePositionName);
            }
        }
    }

    return newMarblePositionName;
}

var moveInSafe = function(marble, movementLeft){
    var safePositionName;

    //if the marble is already on a safe position set safe position name to that position else set to safe position 1
    if(marble.positionName.substr(0, 3) !== 'hom' && marble.positionName.substr(0, 3) !== 'pos'){
        safePositionName = marble.positionName;
    }
    else{
        switch(marble.color){
        case '#00d018':
            safePositionName = 'GrS1';
            movementLeft --;
            break;
        case '#fdff00':
            safePositionName = 'YlS1';
            movementLeft --;
            break;
        case '#0700d0':
            safePositionName = 'BlS1';
            movementLeft --;
            break;
        case '#ff0000':
            safePositionName = 'RdS1';
            movementLeft --;
            break;
        }
    }

    var marblesOnSafePosition = getMarblesOnSafePosition(marble, safePositionName);

    var newSafePositionName = safePositionName.slice(3);
    for(var i = 0; i < movementLeft; i++){
        if(newSafePositionName >= 4){
            return false;
        }
        else{
            for(var j in marblesOnSafePosition){
                if(newSafePositionName === marblesOnSafePosition[j]){
                    return false;
                }
            }
            newSafePositionName ++;  
        }
    }

    var NewMarblePositionName = safePositionName.substr(0, 3) + newSafePositionName;
    console.log('This is the new safe position: ' + NewMarblePositionName);

    return NewMarblePositionName;
}

var getMarblesOnSafePosition = function(marble, marbleSafePositionName){
    var marbleSafePositionName = marbleSafePositionName.substr(0, 3);
    var marblesOnSafePosition = [];

    for(var i in marbles){
        if(marbles[i].positionName.substr(0, 3)  === marbleSafePositionName){
            marblesOnSafePosition.push(marbles[i].positionName);
        }
    }
    return marblesOnSafePosition;
}

//check if marbles on board are on "no passage" positions
var marblesOnWhitesFunction = function(){
	var marblesOnWhites = [];
		
	for(var i in marbles){
        if(marbles[i].positionName === 'pos1' || marbles[i].positionName === 'pos13' || marbles[i].positionName === 'pos14' || marbles[i].positionName === 'pos15' || marbles[i].positionName === 'pos16' || marbles[i].positionName === 'pos17' ||marbles[i].positionName === 'pos29' ||marbles[i].positionName === 'pos30' ||marbles[i].positionName === 'pos31' ||marbles[i].positionName === 'pos32' ||marbles[i].positionName === 'pos33' ||marbles[i].positionName === 'pos45' || marbles[i].positionName === 'pos46' ||marbles[i].positionName === 'pos47' ||marbles[i].positionName === 'pos48' ||marbles[i].positionName === 'pos49' ||marbles[i].positionName === 'pos61' ||marbles[i].positionName === 'pos62' ||marbles[i].positionName === 'pos63' ||marbles[i].positionName === 'pos64'){
            marblesOnWhites.push(marbles[i].positionName.slice(3));
        };
    };
	
	return marblesOnWhites;
}

var calculateNewPosition = function(cardValue, marblePositionName){
    var newMarblePositionName;
   
    //get marble
    var marble = getMarbleByPositionName(marblePositionName);
	
	//New marble on the board.
    if(marblePositionName.substr(0, 3) === 'hom'){
        if(cardValue === 'ace' || cardValue === 'king'){
            switch(marble.color){
            case '#00d018':
                newMarblePositionName = 'pos1';
                break;
            case '#fdff00':
                newMarblePositionName = 'pos17';
                break;
            case '#0700d0':
                newMarblePositionName = 'pos33';
                break;
            case '#ff0000':
                newMarblePositionName = 'pos49';
                break;
            }
        }
        else{
            newMarblePositionName = false;
        }
    }
    else{
		
		//check for trade
		if(cardValue === 'jack'){
			if(getMarblesAvailableForSwitch(marblePositionName) !== false){
				return true;
			};
		}
		
        //get card value
        var movement;
        switch (cardValue){
            case 'ace':
                movement = 1;
                break;
/*            
			case 'jack':
                movement = 11;
                break;
*/
            case 'queen':
                movement = 12;
                break;
            case 'king':
                movement = -1;
                break;
            default:
                movement = parseInt(cardValue);
                break;
        }

        var movementLeft = movement;

        //check if marble is in safe position
        if(marblePositionName.substr(0, 3) !== 'hom' && marblePositionName.substr(0, 3) !== 'pos'){
            newMarblePositionName  = moveInSafe(marble, movementLeft);
            return newMarblePositionName;
        }
        
        //calculate new position and set from position 64 to 1
        var marblePositionNumber = parseInt(marblePositionName.slice(3));
        var checkedResponse;
        if(movement > 0){
            for(var i = 0; i < movement; i++){
                marblePositionNumber ++;
                movementLeft --;

                if(marblePositionNumber === 64){
                        marblePositionNumber = 0;
                }

                checkedResponse = checkNewPosition(marblePositionNumber, movementLeft, marble);
                
                if(checkedResponse === false){
                    return false;
                }
                else if(checkedResponse.substr(2,1) === 'S'){
                    console.log('Dit werkt' + checkedResponse);
                    newMarblePositionName = checkedResponse;
                    return newMarblePositionName;
                }
                else{
                    newMarblePositionName = "pos" +  marblePositionNumber;
                }
            }
        }
        else{
            for(var i = 0; i > movement; i--){
				marblePositionNumber --;
                movementLeft ++;

                if(marblePositionNumber === 0){
					marblePositionNumber = 64;
				}

                checkedResponse = checkNewPosition(marblePositionNumber, movementLeft, marble);

                if(checkedResponse === false){
                    return false;
                }
                else{
                    newMarblePositionName = "pos" +  marblePositionNumber;
                }
            }
        }
    }

	//check if position is already occipied;
    for(var j in marbles){
        if(newMarblePositionName === marbles[j].positionName){
            newMarblePositionName += 'KILL';
        }
    }
    return newMarblePositionName;
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

//Update function
var update = function(card, marble, marble2, socketId) {
	var username = getUsername(socketId);
	
    //check if 1 or 2 marbles, if 2 trade.
    if(marble2 !== ''){
        if(marble === marble2){
            console.log('Please pick another marble to trade');
            return;
        }
        //do a trade
        var marble1Position = marbles[marble].positionName;
        var marble2Position = marbles[marble2].positionName;
        // set marble1 position
		marbles[marble].positionName = marble2Position;
        marbles[marble].positionX = positions[marble2Position][1];
        marbles[marble].positionY = positions[marble2Position][2];
        //set marble 2 position
		marbles[marble2].positionName = marble1Position;
        marbles[marble2].positionX = positions[marble1Position][1];
        marbles[marble2].positionY = positions[marble1Position][2];
    }
    else{
        //get card value
        var cardValue = cardDeck[card].value;
        
        //get marble position
        var marblePositionName = marbles[marble].positionName;
        
        //calculate new position
        var newMarblePositionName = calculateNewPosition(cardValue, marblePositionName);
        
        if(newMarblePositionName === false){
            console.log('not posible please try again');
            return;
        }

        //Check if new marble position is occupied by another marble
        if(newMarblePositionName.slice(-4) === 'KILL'){
            newMarblePositionName = newMarblePositionName.substring(0, newMarblePositionName.length - 4);
            removeMarbleFromBoard(newMarblePositionName);
        }

            
        //set new position
        marbles[marble].positionX = positions[newMarblePositionName][1];
        marbles[marble].positionY = positions[newMarblePositionName][2];

        marbles[marble].positionName = newMarblePositionName;
    }
	
	//remove Card from hand
    for(var i = 0; i < 5; i++){
        if(users[username].cards[i] == card.slice(4)){
            users[username].cards[i] = '';
        }
    }
	
	minOneHandSize(username);

	//end turn and start new users turn
	return UserTurn(username);
}

function minOneHandSize(username){
	users[username].handSize --;
	
    if (users[username].handSize <= 0){
        handGeneration(username, 4)
    }
}


//Get the username of the socket
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

var removeMarbleFromBoard = function(positionName){
    var colorCodeOfMarble;
    var homeOpenPositions = [];
    var marbleHomeStartNumber;
    var homeOccupied = [];
    var marble;
    var newHomePosition;

    for(var i in marbles){
        if(marbles[i].positionName === positionName){
            //get the home position number by color checking the color of the marble
			colorCodeOfMarble = marbles[i].color;
            switch(colorCodeOfMarble){
                case '#00d018':
                    marbleHomeStartNumber = 1;
                    break;
                case '#fdff00':
                    marbleHomeStartNumber = 5;
                    break;
                case '#0700d0':
                    marbleHomeStartNumber = 9;
                    break;
                case '#ff0000':
                    marbleHomeStartNumber = 13;
                    break;
            }

            var marbleEndNumber = marbleHomeStartNumber + 4;
            for(marbleHomeStartNumber ;marbleHomeStartNumber < marbleEndNumber; marbleHomeStartNumber++){
				//set which home positions are occupied
				marble = 'marble' + marbleHomeStartNumber;
				
				if(marbles[marble].positionName.substr(0, 3) === 'hom'){
					homeOccupied.push(marbles[marble].positionName);
				}

				//set which home positions are open
				var homePosition = 'hom' + marbleHomeStartNumber;
					homeOpenPositions.push(homePosition);
            }
			
			//console.log('open ' + homeOpenPositions);
			
            for(var j = 0; j < 4; j++){
                //console.log('bezet ' + homeOccupied[j]);
                for(var h = 0; h < 4; h++){
                    if(homeOccupied[j] !== homeOpenPositions[h]){
                        newHomePosition = homeOpenPositions[h];
                    }
                }
            }

            marbles[i].positionName = newHomePosition;
            marbles[i].positionX = positions[newHomePosition][1];
            marbles[i].positionY = positions[newHomePosition][2];
        }
    }
}

var getPossibleMarbles = function(card, username){
	var possibleMarbles = {};
    var jackWalk = false;
    var jackTrade = false;
	
    //get player number
    var playername = userPlayerNumber(username);
	
	var marblePosition;
	for(var i in marbles){
		if(marbles[i].player === playername){
			marblePosition = marbles[i].positionName;
			if(calculateNewPosition(11, marblePosition) !== false){
				possibleMarbles[i] = marbles[i];
				if(cardDeck[card].value === "jack"){
					jackWalk = true;
				}
			}
			if(cardDeck[card].value === "jack"){
				var tradeMarbles = getMarblesAvailableForSwitch(marblePosition);
				if(tradeMarbles > 0){
					jackTrade = true;
				}
			}
		}
	}
	possibleMarblesMAIN = possibleMarbles;

	for(var i in tradeMarbles){
		console.log("trade marbles are: " + tradeMarbles[i].positionName);
		possibleMarblesMAIN[i] = tradeMarbles[i];
	}

    return jackpossibility(jackWalk, jackTrade);
}

var jackpossibility = function(jackWalk, jackTrade){
	if(jackWalk && jackTrade){
        return 'both';
    }
    else if(jackWalk){
        return 'walk';
    }
    else if(jackTrade){
        return 'trade';
    }
}


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
        }
        else{
            socket.emit('signInResponse',{succes:false});
        }
    });
	
	//card chosen
	socket.on('cardChosen', function(cardname, type){
		var username = getUsername(socket.id);
		var options = getPossibleMarbles(cardname, username);
		//check type of card
		console.log('TYPE IS ' + type);
		if(type === 'jack'){
			socket.emit('jack', options);
			return;
		}
		else{
			socket.emit('marbleClick', users[username], possibleMarblesMAIN);
		}
	});

    //update
	socket.on('getCard', function(card,marble, marble2){
        console.log(marble + ' and '+ marble2);
	
        var newusername = update(card,marble, marble2,socket.id);
	    var roomNumber = checkForUserRoom(newusername, false);
        console.log('new username is ' + newusername);
        var possibleTurn = cardPossibility(newusername);
        console.log('card possibility =  ' + possibleTurn);
        if(possibleTurn !== undefined){
			minOneHandSize(possibleTurn);
            for(var i = 1; i < 5; i++){
                possibleTurn = cardPossibility(possibleTurn);
                if(possibleTurn === undefined){
                    break;
                }
				else{
					minOneHandSize(possibleTurn);
				}
            }
        }

		for(var i in SOCKET_LIST){
            for(var j in rooms[roomNumber]){
                if(SOCKET_LIST[i].id === rooms[roomNumber][j].id){
                    //generate card posibilities for every user in group after update
                    var username = getUsername(rooms[roomNumber][j].id);
                    console.log('update send to ' + username + 'his cards are ' + users[username].cards);
                    SOCKET_LIST[i].emit('sendPosition', marbles);
                    SOCKET_LIST[i].emit('cards', users[username], cardDeck);
                }
            }
        }
	});
	
	//on disconnect
	socket.on('disconnect', function () {
        delete SOCKET_LIST[socket.id];
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