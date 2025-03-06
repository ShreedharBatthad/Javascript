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
}

checkgrade(95);