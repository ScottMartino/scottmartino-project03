const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.handleFormSubmit}>
                <label htmlFor="minifig">Enter MiniFigure Name or Type:  </label>
                <input 
                    type="text"
                    id="minifig"
                    onChange={props.handleInputChange}
                    value={props.minifigs} 
                    />
                <button>Submit</button>
                
            </form>
        </div>
    )
}

export default Form