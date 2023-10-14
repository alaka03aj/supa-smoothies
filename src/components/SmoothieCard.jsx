import './SmoothieCard.css'

const SmoothieCard = ({smoothie}) => {
    return (
        <div className="smoothie">
            <h3 className='s-title'>{smoothie.name}</h3>
            <p>{smoothie.desc}</p>
            <div>Rating: {smoothie.rating}</div>
        </div>
    )
}

export default SmoothieCard;