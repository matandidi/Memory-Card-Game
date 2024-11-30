document.addEventListener('DOMContentLoaded', () => {

    const cardsList = [
        {
            name: 'atv',
            Image: 'images/atv.png'
        },
        {
            name: 'atv',
            Image: 'images/atv.png'
        },
        {
            name: 'balloon',
            Image: 'images/balloon.png'
        },
        {
            name: 'balloon',
            Image: 'images/balloon.png'
        },
        {
            name: 'bimba',
            Image: 'images/bimba.png'
        },
        {
            name: 'bimba',
            Image: 'images/bimba.png'
        },
        {
            name: 'carriage',
            Image: 'images/carriage.png'
        },
        {
            name: 'carriage',
            Image: 'images/carriage.png'
        },
        {
            name: 'combat helicopter',
            Image: 'images/combat helicopter.png'
        },
        {
            name: 'combat helicopter',
            Image: 'images/combat helicopter.png'
        },
        {
            name: 'drone',
            Image: 'images/drone.png'
        },
        {
            name: 'drone',
            Image: 'images/drone.png'
        },
        {
            name: 'fighter jet',
            Image: 'images/fighter jet.png'
        },
        {
            name: 'fighter jet',
            Image: 'images/fighter jet.png'
        },
        {
            name: 'girls bike',
            Image: 'images/girls bike.png'
        },
        {
            name: 'girls bike',
            Image: 'images/girls bike.png'
        },
        {
            name: 'glider',
            Image: 'images/glider.png'
        },
        {
            name: 'glider',
            Image: 'images/glider.png'
        },
        {
            name: 'helicopter',
            Image: 'images/helicopter.png'
        },
        {
            name: 'helicopter',
            Image: 'images/helicopter.png'
        },
        {
            name: 'jeep',
            Image: 'images/jeep.png'
        },
        {
            name: 'jeep',
            Image: 'images/jeep.png'
        },
        {
            name: 'missile',
            Image: 'images/missile.png'
        },
        {
            name: 'missile',
            Image: 'images/missile.png'
        },
        {
            name: 'motorcycle',
            Image: 'images/motorcycle.png'
        },
        {
            name: 'motorcycle',
            Image: 'images/motorcycle.png'
        },
        {
            name: 'passnger plane',
            Image: 'images/passnger plane.png'
        },
        {
            name: 'passnger plane',
            Image: 'images/passnger plane.png'
        },

        {
            name: 'red car',
            Image: 'images/red car.png'
        },
        {
            name: 'red car',
            Image: 'images/red car.png'
        },
        {
            name: 'rollerblades',
            Image: 'images/rollerblades.png'
        },
        {
            name: 'rollerblades',
            Image: 'images/rollerblades.png'
        },
        {
            name: 'rzr',
            Image: 'images/rzr.png'
        },
        {
            name: 'rzr',
            Image: 'images/rzr.png'
        },
        {
            name: 'scooter',
            Image: 'images/scooter.png'
        },
        {
            name: 'scooter',
            Image: 'images/scooter.png'
        },
        {
            name: 'ship',
            Image: 'images/ship.png'
        },
        {
            name: 'ship',
            Image: 'images/ship.png'
        },
        {
            name: 'skate',
            Image: 'images/skate.png'
        },
        {
            name: 'skate',
            Image: 'images/skate.png'
        },
        {
            name: 'skateboard',
            Image: 'images/skateboard.png'
        },
        {
            name: 'skateboard',
            Image: 'images/skateboard.png'
        },
        {
            name: 'space shuttle',
            Image: 'images/space shuttle.png'
        },
        {
            name: 'space shuttle',
            Image: 'images/space shuttle.png'
        },
        {
            name: 'stroller',
            Image: 'images/stroller.png'
        },
        {
            name: 'stroller',
            Image: 'images/stroller.png'
        },
        {
            name: 'submarine',
            Image: 'images/submarine.png'
        },
        {
            name: 'submarine',
            Image: 'images/submarine.png'
        },
        {
            name: 'surfboard',
            Image: 'images/surfboard.png'
        },
        {
            name: 'surfboard',
            Image: 'images/surfboard.png'
        },
        {
            name: 'tank',
            Image: 'images/tank.png'
        },
        {
            name: 'tank',
            Image: 'images/tank.png'
        },
        {
            name: 'tractor',
            Image: 'images/tractor.png'
        },
        {
            name: 'tractor',
            Image: 'images/tractor.png'
        },
        {
            name: 'train',
            Image: 'images/train.png'
        },
        {
            name: 'train',
            Image: 'images/train.png'
        },
        {
            name: 'truck',
            Image: 'images/truck.png'
        },
        {
            name: 'truck',
            Image: 'images/truck.png'
        },
        {
            name: 'white car',
            Image: 'images/white car.png'
        },
        {
            name: 'white car',
            Image: 'images/white car.png'
        }
    ];
    cardsList.sort( () => 0.5 - Math.random() );

    const gride = document.querySelector('.gameGrid');
    const attemptsHolder = document.querySelector('.attemptsHolder');
    const foundHolder = document.querySelector('.foundHolder');
    const cardsInGame = 30;

    var attempts = 0;
    var foundCards = 0;
    attemptsHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    var chosenCards = [];
    var chosenCardsIds = [];

    function initiateBoard(){
        for (var i=0; i < cardsList.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/qestion mark.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            gride.appendChild(card);
        }

    }

    function flipCard(){
        if(chosenCards.length !=2){
            var cardId = this.getAttribute('data-id');
            if(this.getAttribute('src') != 'images/with squre.png'){
                chosenCards.push(cardsList[cardId].name);
                chosenCardsIds.push(cardId);
                this.setAttribute('src', cardsList[cardId].Image);
                if(chosenCards.length ==2){
                    setTimeout(checkForMatach, 500);
                }
            }

        }

    }

    function checkForMatach(){
        attempts++;
        var cards = document.querySelectorAll('img');
        var firstCard = chosenCardsIds[0];
        var secondCard = chosenCardsIds[1];
        if(chosenCards[0] == chosenCards[1]){
            foundCards++;
            cards[firstCard].setAttribute('src', 'images/with squre.png');
            cards[secondCard].setAttribute('src', 'images/with squre.png');
            
        }else{
            cards[firstCard].setAttribute('src', 'images/qestion mark.png');
            cards[secondCard].setAttribute('src', 'images/qestion mark.png');
        }

        chosenCards = [];
        chosenCardsIds = [];
        attemptsHolder.textContent = attempts;
        foundHolder.textContent = foundCards;
        if(foundCards == cardsInGame){
            alert('well done!!')
        }


    }

    initiateBoard();


})