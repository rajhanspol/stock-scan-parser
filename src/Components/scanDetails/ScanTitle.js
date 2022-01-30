function ScanTitle({data}){

    return(
        <div className="scanTitle">

            <p className="scanName1" >{data.name}</p>

            <p className="scanTag1" 
                style={{color: `${data.color === 'green' ? '#34B71F' : '#F3392F'}`}}>{data.tag}</p>

        </div>
    )
}

export default ScanTitle