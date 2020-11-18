(function () {
    'use strict';

    const SNAKE_SIZE = 64;
    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const totalMarginWidth = window.innerWidth % SNAKE_SIZE;
    const totalMarginHeight = window.innerHeight % SNAKE_SIZE;
    const LRMargin = totalMarginWidth / 2;
    const TBMargin = totalMarginHeight / 2;
    const HEADERSIZE = 64;
    function resizeCanvas() {
        canvas.width = window.innerWidth - totalMarginWidth + LRMargin;
        canvas.height = window.innerHeight - totalMarginHeight + TBMargin - HEADERSIZE;
        context.translate(LRMargin, TBMargin);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const horiz = canvas.width / SNAKE_SIZE;
    const vert = canvas.height / SNAKE_SIZE;
    let direction;
    let snakeX = 0;
    let snakeY = 0;
    let appleX;
    let appleY;
    let score = 0;
    let highScore = localStorage.highScore || 0;
    const help = document.getElementById('help');
    const eat = document.getElementById('eat');
    const lose = document.getElementById('lose');
    const score1 = document.getElementById('score');
    const score2 = document.getElementById('highScore');
    const apple = new Image();
    apple.src = 'images/apple.png';
    const snake = new Image();
    snake.src = 'images/snakehead.png';
    help.addEventListener('click', () => {
        help.disabled = true;
        window.pcs.messageBoxHelp.show('The object of this game is to move the "snake" around the board trying to eat as many apples as you can. The player uses the arrow keys to move the snake around the board. For each apple that the snake eats, you get another point. The game ends when the snake moves off the screen. Good Luck!');
    });
    function randomApple() {
        appleX = (Math.floor(Math.random() * (horiz - 1))) * SNAKE_SIZE;
        appleY = (Math.floor(Math.random() * (vert - 1))) * SNAKE_SIZE;
    }
    function snakeDraw() {
        context.lineWidth = 5;
        context.clearRect(0, 0, canvas.width - LRMargin - context.lineWidth, canvas.height - TBMargin - context.lineWidth);
        context.strokeStyle = 'silver';
        context.strokeRect(0, 0, canvas.width - LRMargin - context.lineWidth, canvas.height - TBMargin - context.lineWidth);
        context.fillStyle = 'darkorange';
        context.fillRect(0, 0, canvas.width - LRMargin - context.lineWidth, canvas.height - TBMargin - context.lineWidth);
        context.drawImage(snake, snakeX, snakeY, SNAKE_SIZE, SNAKE_SIZE);
        context.drawImage(apple, appleX, appleY, SNAKE_SIZE, SNAKE_SIZE);
        score2.innerText = `High Score: ${highScore}`;
        score1.innerText = `Score: ${score}`;
    }
    randomApple();
    snake.addEventListener('load', () => {
        let game = setInterval(() => {
            snakeDraw();
            if (snakeX === appleX && snakeY === appleY) {
                eat.play();
                randomApple();
                score++;
            }

            if (snakeX < 0 || snakeX >= canvas.width - LRMargin || snakeY < 0 || snakeY >= canvas.height - TBMargin) {
                lose.play();
                snakeX = 0;
                snakeY = 0;
                clearInterval(game);
                if (highScore === 0) {
                    localStorage.highScore = highScore;
                }
                if (score > localStorage.highScore) {
                    highScore = score;
                    // window.pcs.messageBoxPlayAgain.buttons.style.bottom = '6px';
                    window.pcs.messageBoxPlayAgain.show(`Game Over. <br> <br> Your Score: ${score} <br> Previous High Score: ${localStorage.highScore}`, ['Play Again']);
                } else {
                    window.pcs.messageBoxPlayAgain.show(`Game Over. <br> <br> Your Score: ${score} <br> High Score: ${highScore}`, ['Play Again']);
                }
                localStorage.highScore = highScore;
            }
            switch (direction) {
                case 'ArrowLeft':
                case '4':
                    snakeX -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                case '6':
                    snakeX += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                case '8':
                    snakeY -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                case '2':
                    snakeY += SNAKE_SIZE;
                    break;
            }

        }, 150);

        document.addEventListener('keydown', e => {
            console.log(e.key);
            switch (e.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                case '2':
                case '4':
                case '6':
                case '8':
                    direction = e.key;
            }
        });
    });

    // class Snake {

    //     constructor(appleImg, snakeImg, SNAKE_SIZE = 64, HEADERSIZE = 64) {
    //         this.SNAKE_SIZE = SNAKE_SIZE;
    //         this.HEADERSIZE = HEADERSIZE;
    //         this.canvas = document.getElementById('theCanvas');
    //         this.context = this.canvas.getContext('2d');
    //         this.totalMarginWidth = window.innerWidth % SNAKE_SIZE;
    //         this.totalMarginHeight = window.innerHeight % SNAKE_SIZE;
    //         this.LRMargin = this.totalMarginWidth / 2;
    //         this.TBMargin = this.totalMarginHeight / 2;
    //         this.apple = new Image();
    //         this.apple.src = appleImg;
    //         this.snake = new Image();
    //         this.snake.src = snakeImg;
    //         this.horiz = this.canvas.width / SNAKE_SIZE;
    //         this.vert = this.canvas.height / SNAKE_SIZE;
    //         this.snakeX = 0;
    //         this.snakeY = 0;
    //         this.score = 0;
    //         this.highScore = localStorage.highScore;
    //         this.score1 = document.getElementById('score');
    //         this.score2 = document.getElementById('highScore');
    //         window.addEventListener('resize', this.resizeCanvas);
    //         this.direction = '';
    //         this.eat = document.getElementById('eat');
    //         this.lose = document.getElementById('lose');
    //         this.help = document.getElementById('help');
    //         this.help.addEventListener('click', () => {
    //             window.pcs.messageBoxHelp.show('The object of this game is to move the "snake" around the board trying to eat as many apples as you can. The player uses the arrow keys to move the snake around the board. For each apple that the snake eats, you get another point. The game ends when the snake moves off the screen. Good Luck!');
    //         });
    //     }
    //     resizeCanvas() {
    //         this.canvas.width = window.innerWidth - this.totalMarginWidth + this.LRMargin;
    //         this.canvas.height = window.innerHeight - this.totalMarginHeight + this.TBMargin - this.HEADERSIZE;
    //         this.context.translate(this.LRMargin, this.TBMargin);
    //     }
    //     randomApple() {
    //         this.appleX = (Math.floor(Math.random() * (this.horiz -1))) * this.SNAKE_SIZE;
    //         this.appleY = (Math.floor(Math.random() * (this.vert - 1))) * this.SNAKE_SIZE;
    //     }
    //     snakeDraw() {
    //         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //         this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    //         this.context.fillStyle = 'purple';
    //         this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    //         this.context.drawImage(this.snake, this.snakeX, this.snakeY, this.SNAKE_SIZE, this.SNAKE_SIZE);
    //         this.context.drawImage(this.apple, this.appleX, this.appleY, this.SNAKE_SIZE, this.SNAKE_SIZE);
    //         this.score2.innerText = `High Score: ${this.highScore}`;
    //         this.score1.innerText = `score: ${this.score}`;
    //     }
    //     eventListener() {
    //         this.snake.addEventListener('load', () => {
    //             let game = setInterval(() => {
    //                 this.snakeDraw();
    //                 if (this.snakeX === this.appleX && this.snakeY === this.appleY) {
    //                     this.eat.play();
    //                     this.randomApple();
    //                     this.score++;
    //                 }
    //                 if (this.snakeX < 0 || this.snakeX >= this.canvas.width - this.LRMargin || this.snakeY < 0 || this.snakeY >= this.canvas.height - this.TBMargin) {
    //                     this.lose.play();
    //                     this.snakeX = 0;
    //                     this.snakeY = 0;
    //                     clearInterval(game);
    //                    if (this.score > localStorage.highScore) {
    //                        this.highScore = this.score;
    //                    }
    //                    localStorage.highScore = this.highScore;
    //                     window.pcs.messageBoxPlayAgain.show('Sorry, You Lose.', true, ['Play Again']);
    //                 }
    //                 switch (this.direction) {
    //                     case 'ArrowLeft':
    //                         this.snakeX -= this.SNAKE_SIZE;
    //                         break;
    //                     case 'ArrowRight':
    //                         this.snakeX += this.SNAKE_SIZE;
    //                         break;
    //                     case 'ArrowUp':
    //                         this.snakeY -= this.SNAKE_SIZE;
    //                         break;
    //                     case 'ArrowDown':
    //                         this.snakeY += this.SNAKE_SIZE;
    //                         break;
    //                 }
    //             }, 500);
    //             document.addEventListener('keydown', e => {
    //                 switch (e.key) {
    //                     case 'ArrowUp':
    //                     case 'ArrowDown':
    //                     case 'ArrowLeft':
    //                     case 'ArrowRight':
    //                         this.direction = e.key;
    //                 }
    //             });
    //         });
    //     }
    // }
    // const sn = new Snake('images/apple.png', 'images/snakehead.png');
    // sn.eventListener();
    // sn.resizeCanvas();
    // sn.snakeDraw();
    // sn.randomApple();

}());