let schoolData = '{"classA":[{"name":"Amara","CSC101":72,"CSC102":55,"CSC103":68},{"name":"Chidi","CSC101":40,"CSC102":48,"CSC103":35},{"name":"Ngozi","CSC101":85,"CSC102":90,"CSC103":78},{"name":"Emeka","CSC101":60,"CSC102":52,"CSC103":44}],"classB":[{"name":"Fatima","CSC101":91,"CSC102":88,"CSC103":95},{"name":"Tunde","CSC101":30,"CSC102":45,"CSC103":50},{"name":"Blessing","CSC101":77,"CSC102":63,"CSC103":70},{"name":"Seun","CSC101":55,"CSC102":49,"CSC103":58}]}';

const data = JSON.parse(schoolData);
const tableBody = document.getElementById("tableBody");
const allStudents = [...data.classA, ...data.classB];

allStudents.forEach(student => {
    const avg = ((student.CSC101 + student.CSC102 + student.CSC103) / 3).toFixed(1);
    const status = avg >= 50 ? "Pass" : "Fail";
    tableBody.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${avg}</td>
            <td class="${status.toLowerCase()}">${status}</td>
        </tr>
    `
});