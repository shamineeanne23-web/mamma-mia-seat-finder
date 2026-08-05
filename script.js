function findSeat() {
    const name = document.getElementById("searchInput").value.trim();

    if (name === "") {
        alert("Please enter your child's full name.");
        return;
    }

    const student = students.find(s =>
        s.name.toLowerCase() === name.toLowerCase()
    );

    if (student) {
        localStorage.setItem("student", JSON.stringify(student));
        window.location.href = "result.html";
    } else {
        alert("Sorry, we couldn't find that name.");
    }
}
