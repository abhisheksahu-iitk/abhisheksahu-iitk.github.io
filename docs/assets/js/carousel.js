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
            },
            [
                EmblaCarouselAutoplay({
                    delay: 2000,          // 2 seconds
                    stopOnInteraction: true, // stops when user swipes
                    stopOnMouseEnter: false, // pause on hover
                }),
            ]
        );
    }
});