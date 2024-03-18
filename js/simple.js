document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
        item.addEventListener("click", function () {
            this.classList.toggle("selected");

            const paragraph = this.querySelector("p");
            const bulletPoints = this.querySelectorAll("li");
            const gridLeft = this.querySelector(".grid-left");
            const gridRight = this.querySelector(".grid-right");

            if (paragraph) {
                paragraph.classList.toggle("visible");
            }

            bulletPoints.forEach((bulletPoint) => {
                bulletPoint.classList.toggle("visible");
                bulletPoint.style.display = bulletPoint.classList.contains("visible")
                    ? "list-item"
                    : "none";
            });

            // Toggle grid-left and grid-right elements
            if (gridLeft && gridRight) {
                console.log("ge");
                gridLeft.classList.toggle("visible");
                gridRight.classList.toggle("visible");

                // Add a new class
                gridLeft.classList.toggle("left-items");
                gridRight.classList.toggle("right-items");
            }

            // Toggle hidden class for all grid items except the clicked one
            gridItems.forEach((gridItem) => {
                if (gridItem !== item) {
                    gridItem.classList.toggle("hidden");
                    const otherParagraph = gridItem.querySelector("p");

                    if (otherParagraph) {
                        otherParagraph.classList.toggle("visible");
                    }
                }
            });

            // Toggle remove chat and todo class
            gridItems.forEach(function (gridItem) {
                if (gridItem !== item && gridItem.classList.contains("selected")) {
                    gridItem.classList.remove("chat", "todo");
                }
            });
        });
    });
});
