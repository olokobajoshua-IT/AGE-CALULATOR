function calculateAge() {
    const dob = document.getElementById("dob").value;

    if (!dob) {
        alert("Please select your date of birth!");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }

    document.getElementById("result").innerHTML = `
        🎉 <b>You are ${age} years old.</b><br>
        📆 You have lived for <b>${age * 365}</b> days (approx).
    `;

    let fact = "";

    if (age < 13) fact = "You are still a kid — full of energy and curiosity!";
    else if (age < 18) fact = "Teenage mode! You're learning, growing, and exploring.";
    else if (age < 30) fact = "Young adult! This is your time to hustle and build yourself.";
    else if (age < 50) fact = "Strong and focused! You’ve gained a lot of life experience.";
    else fact = "You are wise and experienced! A role model to many.";

    document.getElementById("facts").innerHTML = `
        💡 <b>Fun Fact:</b> ${fact}
    `;
}