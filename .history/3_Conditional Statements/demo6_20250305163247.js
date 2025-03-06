function checkgrade(score){
    let grade;
    if(score >=90){
        let grade;
        if(score >=90){
            grade = 'A';
        }
        else {
            if(score >=80){
                grade = 'B';
            }
            else{
                if(score >=70){
                    grade ='c';
                }
                else{
                    grade = 'd'
                }
            }
        }
    }
    console.log(grade)
}

checkgrade(9);
checkgrade(90);
checkgrade(50);
checkgrade(70);