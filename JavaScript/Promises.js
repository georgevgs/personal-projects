
const func = async (data, time) => {  
    
    let result;
    
    for( let i = 0; i < data.length; i ++ ) {
        result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data[i]);
            }, time * 1000);
            
        });

        console.log(result);

    }

}

func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);