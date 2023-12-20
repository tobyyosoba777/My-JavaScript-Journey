const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

//Game State
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color) {
    const element = document.createElement("div");
    
    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false")

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed")

        if(awaitingEndOfMove
            || revealed === "true"
            || element === activeTile
            ) { 
            return;
        }

        element.style.backgroundColor = color;

        if(!activeTile) {
            activeTile = element;

            return;
        }
        console.log(activeTile);

        const colorToMatch = activeTile.getAttribute("data-color")

        if (colorToMatch === color) {
            activeTile.setAttribute("data-revealed", "true");
            element.setAttribute("data-revealed", "true");

            awaitingEndOfMove = false;
            activeTile = null;
            revealedCount += 2;

            if(revealedCount === tileCount) {
                alert("You win, refresh to play again.");
            }
            return;
        }

        //down here
        awaitingEndOfMove = true;

        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndOfMove = false;
            activeTile = null;
        }, 1000)
    });

    return element;
}

//BUILD UP TILES
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    const tile = buildTile(color);

    colorsPicklist.splice(randomIndex, 1);

    //Solved this myself
    tilesContainer.appendChild(tile);
}