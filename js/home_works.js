
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

gmailButton.addEventListener("click", () => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (regex.test(gmailInput.value)) {
        gmailResult.textContent = "Gmail правильный";
    } else {
        gmailResult.textContent = "Gmail неправильный";
    }
});

/*
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
let position = 0;
function moveBlock() {
    position++;
    childBlock.style.left = `${position}px`;
    if (position < parentBlock.clientWidth - childBlock.clientWidth) {
        requestAnimationFrame(moveBlock);
    }
}
moveBlock();
 */


const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let x = 0;
let y = 0;
let direction = "right";

function moveBlock() {
    const maxX = parentBlock.clientWidth - childBlock.clientWidth;
    const maxY = parentBlock.clientHeight - childBlock.clientHeight;

    if (direction === "right") {
        x++;
        if (x >= maxX) {
            x = maxX;
            direction = "down";
        }
    }
    else if (direction === "down") {
        y++;
        if (y >= maxY) {
            y = maxY;
            direction = "left";
        }
    }
    else if (direction === "left") {
        x--;
        if (x <= 0) {
            x = 0;
            direction = "up";
        }
    }
    else if (direction === "up") {
        y--;

        if (y <= 0) {
            y = 0;
            direction = "right";
        }
    }
    childBlock.style.left = `${x}px`;
    childBlock.style.top = `${y}px`;
    requestAnimationFrame(moveBlock);
}
moveBlock();

const seconds = document.querySelector("#seconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let counter = 0;
let intervalId = null;

startButton.addEventListener("click", () => {
    if (intervalId !== null) {
        return;
    }
    intervalId = setInterval(() => {
        counter++;
        seconds.textContent = counter;
    }, 1000);
});
stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});
resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    counter = 0;
    seconds.textContent = 0;
});

const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Первый промис выполнен успешно");
    } else {
        reject("Первый промис провалился");
    }
});
promise
    .then(
        (result) => {
            console.log(result);

            return new Promise((resolve, reject) => {
                const secondSuccess = true;

                if (secondSuccess) {
                    resolve("Второй промис выполнен успешно");
                } else {
                    reject("Второй промис провалился");
                }
            });
        },
        (error) => {
            console.log(error);
        }
    )
    .then(
        (result) => {
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );