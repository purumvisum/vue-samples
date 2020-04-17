new Vue({
    el: '#app',
    data: {
        showFirst: true,
        array: ['Max', 'Anna', 'Chris', 'Manu'],
        playHistory: [],
        monsterHealth: 100,
        playerHealth: 100,
        gameStarted: false
    },
    computed: {
        endGame: function () {
            if (Boolean (this.monsterHealth < 0 || this.playerHealth < 0)) {
                let newGame
                if (this.monsterHealth < 0) {
                    newGame = confirm ('you won! New Game?');
                } else {
                    newGame =confirm ('monster won!New Game?')
                }
                if (newGame) {
                    this.newGame();
                }
            }

            return Boolean (this.monsterHealth < 0 || this.playerHealth < 0)
        }
    },
    methods: {
        attack: function () {
            const hitPoints = Math.floor(Math.random() * 20);
            this.monsterHealth = this.monsterHealth - hitPoints;
            this.playHistory.push(`player hits monster for ${hitPoints}`)
            this.monsterAttack();
        },
        monsterAttack: function () {
            const hitPoints = Math.floor(Math.random() * 20);
            this.playerHealth = this.playerHealth - hitPoints;
            this.playHistory.push(`monster hits player for ${hitPoints}`)
        },
        specialAttack: function () {
            const hitPoints = Math.floor(Math.random() * 40);
            this.monsterHealth = this.monsterHealth - hitPoints;
            this.playHistory.push(`player hits monster for ${hitPoints}`)
            this.monsterAttack();
        },
        heal: function () {
            const healPoints = Math.floor(Math.random() * 20);
            this.playerHealth = this.playerHealth + healPoints;
            this.playHistory.push(`player heal himself for ${healPoints}`)
            this.monsterAttack();
        },
        newGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.playHistory = [];
            this.gameStarted = true;
        }
    }
});
