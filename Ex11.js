var userGrade = prompt("Enter your grade.");

if(90 <= userGrade && userGrade <= 100){
    alert("Your grade is : A")
}
else if(80 <= userGrade && userGrade <= 89){
    alert("Your grade is: B")
}
else if(70 <= userGrade && userGrade <= 79){
    alert("Your grade is: C")
}
else if(60 <= userGrade && userGrade <= 69){
    alert("Your grade is: D")
}
else if(0 <= userGrade && userGrade <= 59){
    alert("Your grade is: F")
}
else{
    alert("ERROR")
}