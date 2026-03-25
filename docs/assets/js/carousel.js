document.addEventListener("DOMContentLoaded", function () {
    const viewportNode = document.querySelector(".embla__viewport");

    if (
        viewportNode &&
        typeof EmblaCarousel !== "undefined" &&
        typeof EmblaCarouselAutoplay !== "undefined"
    ) {
        EmblaCarousel(
            viewportNode,
            {
                loop: true,
                align: "center",
                dragFree: true,
                speed: 1,
            },
            [
                EmblaCarouselAutoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: false, 
                }),
            ]
        );
    }
});