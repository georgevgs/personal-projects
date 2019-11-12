let func = (myArr) => {
    let sum = 0;

    for(let i=0; i<myArr.length; i++){
        for(let j=0; j<myArr[i].length; j++){
           sum = sum + myArr[i][j];
        }
    }

    console.log(sum);
}

const myArr = [
    [5, 9, 25, 99],
    [2, 67],
    [45, 1, 56],
    [77]
]

func(myArr);
