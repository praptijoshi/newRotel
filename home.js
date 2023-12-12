document.addEventListener("DOMContentLoaded", function () {
    // This event listener waits for the HTML document to be fully loaded and parsed before executing the provided function.
    // Smooth scroll to anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    // Selects all anchor links whose href attribute starts with "#"
    for (const link of links) {
        // Iterates through each selected anchor link.
        link.addEventListener('click', function (e) {
            // Adds a click event listener to each anchor link.
            e.preventDefault();
            // Prevents the default behavior of the anchor link.
            const targetId = this.getAttribute('href').substring(1);
            // Retrieves the target id by removing the "#" from the href attribute.
            const targetElement = document.getElementById(targetId);
            // Retrieves the target element using the obtained id.
            if (targetElement) {
                // Checks if the target element exists.
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Scrolls the viewport to the target element with a smooth animation, aligning it to the start of the viewport.
            }
        });
    }
});
