(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const SNAKE_SIZE = 64;
    const totalMarginWidth = window.innerWidth % SNAKE_SIZE;
    const totalMarginHeight = window.innerHeight % SNAKE_SIZE;
    const LRMargin = totalMarginWidth / 2;
    const TBMargin = totalMarginHeight / 2;
    const HEADERSIZE = 64;
    const audio = document.getElementById('audio');
    const eat = document.getElementById('eat');
    const lose = document.getElementById('lose');
    const help = document.getElementById('help');
    const score1 = document.getElementById('score');
    const score2 = document.getElementById('highScore');
    let gameOver = false;
    let highScore = localStorage.highScore || 0;
    let paused = false;
    let score = 0;
    let snake;
    let apple;
    let speed = 500;
    
    // window.pcs.messageBoxStartPlay.show('The object',true,['Start Playing']);

    function resizeCanvas() {
        canvas.width = window.innerWidth - totalMarginWidth + LRMargin;
        canvas.height = window.innerHeight - totalMarginHeight + TBMargin - HEADERSIZE;
        context.translate(LRMargin, TBMargin);
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    help.addEventListener('click', () => {
        help.disabled = true;
        paused = true;
        window.pcs.messageBoxHelp.show('The object of this game is to move the "snake" around the board trying to eat as many apples as you can. <br> Use the arrow keys to move the snake around the board. Press the space bar to pause or resume the game. For each apple that the snake eats, the snake grows longer, and you get another point. The game ends when the snake moves off the screen or if it crashes into itself. <br> <br> Good Luck!<br> <br> Press the spacebar to resume.');
    });

    class Snake {
        constructor() {
            this.direction = 'ArrowRight';
            this.segments = [{ x: 0, y: 0 }];

            document.addEventListener('keydown', e => {
              
                console.log(e);
                switch (e.key) {
                    case 'ArrowUp':
                    case '8':
                        if (this.segments.length === 1 || this.direction !== 'ArrowDown') {
                            this.direction = e.key;
                        }
                        break;
                    case 'ArrowDown':
                    case '2':
                        if (this.segments.length === 1 || this.direction !== 'ArrowUp') {
                            this.direction = e.key;
                        }
                        break;
                    case 'ArrowLeft':
                    case '4':
                        if (this.segments.length === 1 || this.direction !== 'ArrowRight') {
                            this.direction = e.key;
                        }
                        break;
                    case 'ArrowRight':
                    case '6':
                        if (this.segments.length === 1 || this.direction !== 'ArrowLeft') {
                            this.direction = e.key;
                        }
                        break;
                    case ' ':
                        paused = !paused;
                        break;
                }
            });

            this.draw();
        }

        draw() {
            context.drawImage(snakeImage, this.segments[0].x, this.segments[0].y, SNAKE_SIZE, SNAKE_SIZE);

            context.fillStyle = 'green';
            for (let i = 1; i < this.segments.length; i++) {
                context.beginPath();
                context.arc(this.segments[i].x + (SNAKE_SIZE / 2), this.segments[i].y + (SNAKE_SIZE / 2), SNAKE_SIZE / 2, 0, 2 * Math.PI, true);
                context.fill();
                // context.fillRect(this.segments[i].x, this.segments[i].y, SNAKE_SIZE, SNAKE_SIZE);
            }
        }

        move() {
            if (!paused) {
                let head = this.segments[0];
                let segmentFormerlyKnownAsTail = this.segments.pop();
                let oldTailX = segmentFormerlyKnownAsTail.x;
                let oldTailY = segmentFormerlyKnownAsTail.y;
                let x = head.x;
                let y = head.y;

                switch (this.direction) {
                    case 'ArrowLeft':
                    case '4':
                        x -= SNAKE_SIZE;
                        break;
                    case 'ArrowRight':
                    case '6':
                        x += SNAKE_SIZE;
                        break;
                    case 'ArrowUp':
                    case '8':
                        y -= SNAKE_SIZE;
                        break;
                    case 'ArrowDown':
                    case '2':
                        y += SNAKE_SIZE;
                        break;
                }

                if (x < 0 || x > canvas.width - SNAKE_SIZE || y < 0 || y > canvas.height - SNAKE_SIZE) {
                    gameOver = true;
                }

                // check for crash with self (first 3 are waste...)
                if (this.isOnTopOf(x, y)) {
                    gameOver = true;
                }

                if (gameOver) {
                    // not going to add as head, reattach
                    this.segments.push(segmentFormerlyKnownAsTail);
                } else {
                    //head.x = x;
                    //head.y = y;

                    //chopped off tail being reused as new head
                    segmentFormerlyKnownAsTail.x = x;
                    segmentFormerlyKnownAsTail.y = y;
                    this.segments.unshift(segmentFormerlyKnownAsTail);
                }

                if (apple) {
                    if (segmentFormerlyKnownAsTail.x === apple.x && segmentFormerlyKnownAsTail.y === apple.y) {
                        eat.currentTime = 0;
                        eat.play();

                        score++;
                        speed = speed * 0.95;

                        this.segments.push({ x: oldTailX, y: oldTailY });
                        apple.move();
                    }
                }
            }

            this.draw();
        }

        isOnTopOf(x, y) {
            return this.segments.some(segment => segment.x === x && segment.y === y);
        }
    }

    class Apple {
        constructor() {
            this.move();
        }

        draw() {
            context.drawImage(appleImage, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);
        }

        move() {
            this.horiz = canvas.width / SNAKE_SIZE;
            this.vert = canvas.height / SNAKE_SIZE;
            this.x = 0;
            this.y = 0;
            if (snake) {
                do {
                    this.x = (Math.floor(Math.random() * (this.horiz - 1))) * SNAKE_SIZE;
                    this.y = (Math.floor(Math.random() * (this.vert - 1))) * SNAKE_SIZE;
                } while (snake.isOnTopOf(this.x, this.y));
            }
            this.draw();
        }
    }

    function gameLoop() {
        context.lineWidth = 5;
        context.clearRect(0, 0, canvas.width - LRMargin - context.lineWidth, canvas.height - TBMargin - context.lineWidth);
        context.strokeStyle = 'darkred';
        context.strokeRect(0, 0, canvas.width - LRMargin - context.lineWidth, canvas.height - TBMargin - context.lineWidth);
        context.fillStyle = 'silver';
        context.fillRect(0, 0, canvas.width - LRMargin - context.lineWidth, canvas.height - TBMargin - context.lineWidth);
        score2.innerText = `High Score: ${highScore}`;
        score1.innerText = `Score: ${score}`;
        snake.move();
        apple.draw();



        if (!gameOver) {
            setTimeout(gameLoop, speed);
        } else {
            lose.currentTime = 0;
            lose.play();
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
    }

    const snakeImage = new Image();
    snakeImage.src = 'images/snakehead.png';
    snakeImage.addEventListener('load', () => {
        snake = new Snake();
        setTimeout(() => {
            gameLoop();
            console.log(snake);
            console.log(apple);
        }, speed);
    });

    const appleImage = new Image();
    appleImage.src = 'images/apple.png';
    appleImage.addEventListener('load', () => {
        apple = new Apple();
    });
}());