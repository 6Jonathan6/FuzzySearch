 function editDistance(sourceString,targetString){
    const resultArray= []
    const sourceArray = sourceString.toLowerCase().split('')
    const targetArray = targetString.toLowerCase().split('')
    sourceArray.unshift('')
    targetArray.unshift('')

    resultArray.push(sourceArray.map(function(element){
        return arguments[1]
    }))
    targetArray.filter(function(element){
        resultArray.push( [ arguments[1] ] )
    })
    
    resultArray.splice(1,1)
    
    sourceArray.forEach(function(element){
        if(arguments[1] === 0){
            return

        } else {
            let sourceChar = element 
            let  i = arguments[1]
            targetArray.forEach(function(element){
                
                if(arguments[1] === 0){
                    return
                
                } else {
                    let minor = null
                    let targetChar = element 
                    let j = arguments[1]
                
                    if(sourceChar === targetChar){
                        minor = getMinor(0,resultArray,i,j)
                
                    } else{
                        minor = getMinor(1,resultArray,i,j)
                    }
                    resultArray[j][i] = minor
                }
            })
        }
    })
    return resultArray[ resultArray.length - 1 ][ resultArray[ resultArray.length - 1 ].length - 1 ]
}
function getMinor(cost,resultArray,i,j){
    const neighbors = [resultArray[j-1][i] + 1,resultArray[j][i-1] + 1, resultArray[j-1][i-1] + cost] 

    return neighbors.sort(function(a,b){
        return a-b
    
    })[0]
}


function search(transactions,searchInput){
    if(searchInput === "" || searchInput === " "){
        return transactions
    } else {
        return transactions.filter( 
            function(transaction){
                for(let f in transaction){
                    const field = transaction[f].toString()
                    const editDistanceResult = editDistance(searchInput,field)
                    switch(f){
                        case "date":
                            const regex = new RegExp(".*" + searchInput + ".*")
                            if(regex.test(field.toLowerCase())){
                                return true

                            } else {
                                break
                            }


                        case "card_last_four":
                            if(editDistanceResult < 3){
                                return true
                            } else {
                                break
                            }


                        default:
                            if(editDistanceResult < field.length){
                                return true
                            } else {
                                break
                            }
                    }
                }
            })
    }
}


export {
    search,
    
}