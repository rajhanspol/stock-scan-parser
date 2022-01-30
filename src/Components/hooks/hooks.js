import {useState, useEffect} from 'react'

export function useData() {
const [listData, setData] = useState([])

//get data at app start and store in state

useEffect(() => {
    fetch('https://mobile-app-challenge.herokuapp.com/data')
    .then(res => res.json())
    .then(data => {
        setData(data)
                console.log(data)
            }
        )
}, [])

return listData
}
