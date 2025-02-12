import './buttonNav.css'

export default function ButtonNav({src}, {alt}){
    return (
        <>
        <button>
            <img className="Icons" src={src} alt={alt} />
        </button>
        </>
    )
}