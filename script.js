document.addEventListener('DOMContentLoaded', function() {
    // Select the navigation toggle button and navigation list
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    // Add click event listener to the navigation toggle button
    navToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the navigation list
        navList.classList.toggle('active');
    });
});

$(document).ready(function() {
    // Select all elements with the class 'counter'
    const counters = document.querySelectorAll('.counter');

    // Create an IntersectionObserver to observe when elements are in the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the element is in the viewport, animate the counter
                var $this = $(entry.target),
                    countTo = $this.attr('data-count');
                
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },

                {
                    duration: 2500, // Animation duration in milliseconds
                    easing: 'linear', // Animation easing function
                    step: function() {
                        // Update the text with the current count value
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        // Set the final count value
                        $this.text(this.countNum);
                    }
                });  
            } else {
                // Reset the counter value to 0 when it is not in the viewport
                entry.target.innerText = '0';
            }
        });
    }, {
        threshold: 0.1 // Trigger the observer when 10% of the element is visible
    });

    // Observe each counter element
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

$(document).ready(function(){
    // Initialize the Owl Carousel with the specified options
    $("#owl-demo").owlCarousel({
        items: 1, // Number of items to display at once
        loop: true, // Enable looping of the carousel
        autoplay: true, // Enable automatic transitions
        autoplayTimeout: 3000, // Time between transitions in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
        dots: true, // Display pagination dots
        smartSpeed: 2000, // Smooth transition speed in milliseconds
    });
});