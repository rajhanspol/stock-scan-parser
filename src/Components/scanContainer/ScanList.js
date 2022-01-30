import Scans from "./Scans"
import { useNavigate } from "react-router-dom";
import {useData} from '../hooks/hooks'
import {getNavLinks} from '../../utils/utils'

function ScanList(){

    const listData = useData(); 
    const navigate = useNavigate();

        
    function onClick(data){
        let nav = getNavLinks(data) //function to get desired route names from scan names
        navigate(`/page/${nav}`,{state:data}) //create new route and pass data
    }


    return(
        <ul className="scanlist">
            {listData.map(item => ( //map and render individual scans
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