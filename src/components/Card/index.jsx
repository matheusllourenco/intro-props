import PropTypes from 'prop-types';
import './styles.css';


// const props = {
//     name: 'tsunode'
// };

// const {name} = props;

const Card = ({ name, age }) => {
    return(
        <div className='card'>
            <h3>Card</h3>
            <span>{name} - {age}</span>
            <img src="./vite.svg" alt="" />
            <a>Acessar</a>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default Card;