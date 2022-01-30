function ScanContent({data}){


    return(
        <div className="scanContent" >
            <p className="scanName1" dangerouslySetInnerHTML={{__html: data.text}}></p>
        </div>
    )
}

export default ScanContent