document.addEventListener("DOMContentLoaded", function () {
    // Click event listener for grid items
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.addEventListener("click", toggleGridItem);
    });

    // Click event listener for menu toggle
    document.querySelectorAll(".toggle").forEach(function (toggle) {
        toggle.addEventListener("click", toggleMenu);
    });
});

function toggleGridItem() {
    this.classList.toggle("selected");

    const paragraph = this.querySelector("p");
    const bulletPoints = this.querySelectorAll("li");
    const gridImageContainer = this.querySelector(".grid-image-container");
    const gridLeft = this.querySelector(".grid-left");
    const gridRight = this.querySelector(".grid-right");

    toggleVisibility(paragraph);
    toggleVisibility(gridImageContainer);

    bulletPoints.forEach((bulletPoint) => {
        toggleVisibility(bulletPoint);
    });

    toggleVisibility(gridLeft);
    toggleVisibility(gridRight);

    // Add or remove additional classes for grid left and right
    if (gridLeft && gridRight) {
        gridLeft.classList.toggle("left-items");
        gridRight.classList.toggle("right-items");
    }

    // Toggle hidden class for other grid items
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        if (gridItem !== this) {
            gridItem.classList.toggle("hidden");
            const otherParagraph = gridItem.querySelector("p");
            if (otherParagraph) {
                toggleVisibility(otherParagraph);
            }
        }
    });
}

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

function toggleVisibility(details) {
    if (details) {
        details.classList.toggle("visible");
        details.style.display = details.classList.contains("visible") ? "block" : "none";
    }
}
