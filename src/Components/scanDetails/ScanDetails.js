import { useEffect, useState } from "react"
import {useLocation } from "react-router-dom";
import ScanTitle from "./ScanTitle";
import ScanContent from "./ScanContent";
import {splitString} from '../../utils/utils'


function ScanDetails(){

    const [listData, setListData] = useState([])
    const urlparams = useLocation();


    useEffect(()=>{
        if(urlparams.state !== null){
            console.log('urlparams',urlparams)
            // setListData(urlparams.state.criteria)
            
                let arrx = urlparams.state.criteria
                for(let i=0; i<arrx.length; i++){
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
            {listData.map(item => (
                    <ScanContent 
                        key={urlparams.key}
                        data={item}
                        pathName={urlparams.pathname}

                    />
                ))}
        </div>
    )
}

export default ScanDetails
