const score = 2;
let grade;
if(score >=  score <= 100) {
    grade = "A";
} else if(score >= 60 && score <= 79 ) {
    grade = "B"
} else if(score >= 50 && score <= 59) {
    grade = "C"
} else if(score >= 40 && score <= 49) {
    grade = "D"
} else if(score >= 0 && score <= 39) {
    grade = "F";
} else {
    console.log('INVALID NUMBER FOOL');
}

console.log(grade);