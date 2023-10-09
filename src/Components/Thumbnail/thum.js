import './thum.css'

const Thumbnail = props =>{
    const {imageDetails, isActive, updateId} = props
    const {thumbnailUrl, thumbnailAltText,id} = imageDetails

    const thumbnailClassName = isActive ? `thumbnail active` :`thumbnail`

    const onChangeId =() =>{
        updateId(id)
    }
    return(
        <li className="thumbnail-list">
            <button type="btn" className="btn" onChange={onChangeId}>

                <img src={thumbnailUrl}
                     alt={thumbnailAltText}
                     className={thumbnailClassName}
                />
                
                
            </button>
        </li>
    )
}
export default Thumbnail;