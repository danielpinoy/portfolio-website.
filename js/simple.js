document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(function (item) {
        item.addEventListener("click", function () {
            this.classList.toggle("selected");

            const paragraph = this.querySelector("p");
            if (paragraph) {
                paragraph.classList.toggle("visible");
            }

            gridItems.forEach(function (gridItem) {
                if (gridItem !== item) {
                    gridItem.classList.toggle("hidden");
                    const otherParagraph = gridItem.querySelector("p");
                    if (otherParagraph) {
                        otherParagraph.classList.toggle("visible");
                    }
                }
            });
        });
    });
});
