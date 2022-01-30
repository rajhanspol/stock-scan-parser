function Scans({data,nameClick}){

    return(
        <li
        className="scans"
        onClick={() => nameClick(data)} 
        >

            <p className="scanName" >{data.name}</p>

            <p className="scanTag" 
                style={{color: `${data.color == 'green' ? '#34B71F' : '#F3392F'}`}}>{data.tag}</p>

        </li>
    )
}

export default Scans