// Rotating Testimonials
const testimonials = [
    '"This academy changed my life" - John Doe',
    '"Great courses with expert teachers" - Jane Smith',
    '"Best learning experience ever" - Mark Brown'
];

let index = 0;
function rotateTestimonial() {
    index = (index + 1) % testimonials.length;
    document.getElementById("testimonial").innerText = testimonials[index];
}
setInterval(rotateTestimonial, 3000);

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
