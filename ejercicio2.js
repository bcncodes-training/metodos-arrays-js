
        let  students = [
        {
        name: "Tony Parker",
        firstProject: 80,
        secondProject: 75,
        finalExam: 90
        },
        {
        name: "Marc Barchini",
        firstProject: 84,
        secondProject: 65,
        finalExam: 65
        },
        {
        name: "Claudia Lopez",
        firstProject: 45,
        secondProject: 95,
        finalExam: 99
        },
        {
        name: "Alvaro Briattore",
        firstProject: 82,
        secondProject: 92,
        finalExam: 70
        },
        {
        name: "Isabel Ortega",
        firstProject: 90,
        secondProject: 32,
        finalExam: 85
        },
        {
        name: "Francisco Martinez",
        firstProject: 90,
        secondProject: 55,
        finalExam: 78
        },
        {
        name: "Jorge Carrillo",
        firstProject: 83,
        secondProject: 77,
        finalExam: 90
        },
        {
        name: "Miguel López",
        firstProject: 80,
        secondProject: 75,
        finalExam: 75
        },
        {
        name: "Carolina Perez",
        firstProject: 85,
        secondProject: 72,
        finalExam: 67
        },
        {
        name: "Ruben Pardo",
        firstProject: 89,
        secondProject: 72,
        finalExam: 65
        }
        ];

let results = new Array;

//results = calculateResults(students);
results = calculateResultsMap(students);
console.log(results);

/////////////////////////////////////////////////////////////////////////////////////////////////

function calculateResults(mArray) {
    let mArrayNew = new Array;
    let noteFirst, noteSecond, noteFinal;
    mArray.forEach(e => {
        noteFirst = (e.firstProject + e.secondProject) / 2;
        noteSecond = e.finalExam;
        noteFinal = (noteFirst * .4) + (noteSecond * .6);
        student = {name: e.name ,final_grade: noteFinal };
        mArrayNew.push(student);
    });
    return mArrayNew;
}

function calculateResultsMap(mArray) {
    let noteFirst, noteSecond, noteFinal;
    let mArrayNew = mArray.map(e => {
        noteFirst = (e.firstProject + e.secondProject) / 2;
        noteSecond = e.finalExam;
        noteFinal = (noteFirst * .4) + (noteSecond * .6);
        noteFinal = Math.round(noteFinal*100)/100;
        student = {name: e.name ,final_grade: noteFinal };
        return student;
    });
    return mArrayNew;
}



