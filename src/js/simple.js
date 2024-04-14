const profile = document.querySelector(".profile");
const fadeInElements = document.querySelectorAll(".profile .fade-in");

// HOME PAGE
profile.addEventListener("mouseenter", () => {
    fadeInElements.forEach((element) => {
        element.style.transition = `opacity 0.5s ease-in-out 0.3s`;
    });
});

profile.addEventListener("mouseleave", () => {
    fadeInElements.forEach((element) => {
        element.style.transition = "opacity 0s";
    });
});

// WORK PAGE
document.addEventListener("DOMContentLoaded", function () {
    // Click event listener for grid items
    const gridItems = document.querySelectorAll(".work-grid-item");
    gridItems.forEach((item) => {
        item.addEventListener("click", toggleGridItem);
    });

    // Click event listener for menu toggle
    document.addEventListener("click", (event) => {
        if (event.target.matches(".toggle")) {
            toggleMenu();
        }
    });
});

function toggleGridItem() {
    this.classList.toggle("selected");
    this.classList.toggle("grid-mode");

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
    const gridItems = document.querySelectorAll(".work-grid-item");
    gridItems.forEach((gridItem) => {
        if (gridItem !== this) {
            gridItem.classList.toggle("hidden");
            const otherParagraph = gridItem.querySelector("p");
            if (otherParagraph) {
                toggleVisibility(otherParagraph);
            }
        }
    });

    // Target the .work-grid element
    const workGrid = document.querySelector(".work-grid");
    workGrid.classList.toggle("block-mode");
}

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

function toggleVisibility(element) {
    if (element) {
        element.classList.toggle("visible");
    }
}
