import { useEffect, useState } from "react"
import {useLocation } from "react-router-dom";
import ScanTitle from "./ScanTitle";
import ScanContent from "./ScanContent";
import {splitString} from '../../utils/utils'


function ScanDetails(){

    const [listData, setListData] = useState([])
    const urlparams = useLocation(); //get data from navigate() in scanList


    useEffect(()=>{ //useEffect with url change as parameter 
        if(urlparams.state !== null){
            // console.log('urlparams',urlparams)            
                let arrx = urlparams.state.criteria
                for(let i=0; i<arrx.length; i++){ //for loop to check type variable and change string parameters
                    if(arrx[i].type === "variable" && arrx[i]){
                        arrx[i].text = splitString(arrx[i].text, arrx[i].variable)
                        // console.log(arrx[i].text, arrx[i].variable)
                    }
                }
                setListData(arrx)
            
        }
    },[urlparams])
    
    
     
    
    return(
        <div className="scanDetails">
            <ScanTitle data={urlparams.state}/>
            {listData.map((item, index) => (
                    <ScanContent 
                        key={index}
                        data={item}
                        pathName={urlparams.pathname}

                    />
                ))}
        </div>
    )
}

export default ScanDetails
