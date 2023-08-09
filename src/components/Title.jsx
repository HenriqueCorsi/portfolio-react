import '../assets/css/title-style.css'

function Title({title}){
    return(
        <>
            <div className="title-container">
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default Title;