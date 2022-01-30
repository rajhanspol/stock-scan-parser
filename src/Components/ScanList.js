import Scans from "./Scans"
import { useNavigate } from "react-router-dom";
import {useData} from './hooks/hooks'

function ScanList(){

    const listData = useData();
    const navigate = useNavigate();

        
    function onClick(data){
        
        let nav = data.name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
        nav = nav.replace(' ','_')
        nav = nav.replace(/\s/g, '').toLowerCase()
        // console.log('nav',nav)
        navigate(`/page/${nav}`,{state:data})
    }


    return(
        <ul className="scanlist">
            {listData.map(item => (
                <Scans 
                    key={item.id}
                    data={item}
                    nameClick={onClick}
                />
            ))}
        </ul>
    )
}

export default ScanList