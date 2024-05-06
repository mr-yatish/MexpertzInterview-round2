
// eslint-disable-next-line react/prop-types
const Batch = ({ image, title, bgColor, className }) => {
    // batch for page
    return (
        <div className={` w-auto rounded-5 m-1 cursor-pointer  px-2 py-1 ${className}`} style={{ background: bgColor }}>
            <div className="d-flex justify-content-around align-items-center">
                {image && <div className='w-auto'>
                    <img src={image} height={"25px"} alt="" />
                </div>}
                <div className="w-auto my-2">
                    <h5 className=' text-white text-nowrap '>{title}</h5>
                </div>
            </div>
        </div>
    )
}

export default Batch;