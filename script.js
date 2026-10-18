document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const country = document.getElementById("country").value;

    const courses = [];
    document.querySelectorAll('input[name="course"]:checked')
        .forEach(function(item) {
            courses.push(item.value);
        });

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    alert(
        "Form Submitted Successfully!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message + "\n" +
        "Courses: " + (courses.join(", ") || "None selected") + "\n" +
        "Gender: " + gender + "\n" +
        "Country: " + country
    );
});