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