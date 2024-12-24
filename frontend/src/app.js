async function fetchStudents() {
    const response = await fetch('/students');
    const students = await response.json();
    console.log(students);
}

fetchStudents();
