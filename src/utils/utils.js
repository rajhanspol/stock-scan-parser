
export function splitString(str1, obj1){
    let str_split = str1.split(" ")   
    let keys = Object.keys(obj1)
    for(let j = 0; j<keys.length; j++){
        for(let i = 0; i<str_split.length; i++){
          if(str_split[i] === keys[j]){
            // console.log('yes')
            if(obj1[str_split[i]].type === 'value'){
                // str_split[i] = obj1[str_split[i]].values[0]
                str_split[i] = `<span style="color:blue; cursor:pointer">(${str_split[i] = obj1[str_split[i]].values[0]})</span>`
              } else if(obj1[str_split[i]].type === 'indicator'){
                str_split[i] = `<span style="color:blue; cursor:pointer">(${obj1[str_split[i]].default_value})</span>`
              }
        }
      }
    }
    let str_join = str_split.join(" ")
    return str_join
}
