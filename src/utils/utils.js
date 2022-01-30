// splitString function is to change $1 from string to its corresponding value, stored in an array(inside object). Check unit test for clarification.
// split and store string in an array
// store object keys in an array
// check which word in string matches an object key ($1, $2, etc)
// check type and join string

export function splitString(str1, obj1){ 
    let str_split = str1.split(" ")   
    let keys = Object.keys(obj1)
    for(let j = 0; j<keys.length; j++){
        for(let i = 0; i<str_split.length; i++){
          if(str_split[i] === keys[j]){
            if(obj1[str_split[i]].type === 'value'){
                str_split[i] = `<span style="color:#337ab7; cursor:pointer">(${str_split[i] = obj1[str_split[i]].values[0]})</span>`
              } else if(obj1[str_split[i]].type === 'indicator'){
                str_split[i] = `<span style="color:#337ab7; cursor:pointer">(${obj1[str_split[i]].default_value})</span>`
              }
        }
      }
    }
    let str_join = str_split.join(" ")
    return str_join
}




export function getNavLinks(data){
  let navLink = data.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') //remove special chars
  navLink = navLink.replace(' ','_') //remove space
  navLink = navLink.replace(/\s/g, '').toLowerCase() //remove space
  return navLink
}