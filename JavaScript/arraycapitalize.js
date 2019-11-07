const func = (data, pos) => {
    for (let i = 0; i<data.length; i++){
        if(i === pos-1){
            data[i]=data[i].toUpperCase()
        }
    }
    console.log(data)
}

func(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
