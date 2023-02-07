const Displayphotos = (props) => {
    return (
        <div>
        {
        props.results
        ?.map((minifig, index) => {
            return (  
                <div key={ index }
                    className="returnbox" >
                    
                    
                    
                    <img src = {minifig.set_img_url ? minifig.set_img_url : './assets/stock.jpg'} alt={minifig.name}/>
                    
                    
                    
                    
                    <p>{minifig.name}</p>
                    <a href={minifig.set_url} target="_blank" rel="noreferrer" className="rebricklink">Rebrickable Link</a>
                </div>
                )
            })
        }
        </div>    
    )
}

export default Displayphotos;