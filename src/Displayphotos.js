const Displayphotos = (props) => {
    return (
        <div>
        {
         props.results?.map((minifig, index) => {
            return (  
                <img key={index} src={minifig.set_img_url} alt="minifigure" />
                )
            })
        }
        </div>
    )
}

export default Displayphotos