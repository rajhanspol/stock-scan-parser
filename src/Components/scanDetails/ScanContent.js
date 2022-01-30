import { useNavigate } from "react-router-dom";



function ScanContent({data}){

    // const navigate = useNavigate();

    // function onValueClick(value){
    //     console.log(pathName)
    //     navigate(`${pathName + "_params"}`,{state:value})
    //     console.log(value)
    // }

    return(
        <div
        
        className="scanContent"
        // onClick={() => nameClick(data)} 
        >
            <p className="scanName1" dangerouslySetInnerHTML={{__html: data.text}}></p>
            {/* <p className="scanName1" >{data.text}</p> */}
            {/* {data.type === "variable" && <p className="scanName" >{data.text}</p> } */}

        </div>
    )
}

export default ScanContent