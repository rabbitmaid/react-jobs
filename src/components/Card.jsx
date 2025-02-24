import PropTypes from 'prop-types';

function Card({ children, bg = 'bg-gray-100' }) {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        { children }
    </div>
  )
}

Card.propTypes = {
    children: PropTypes.any,
    bg: PropTypes.string.isRequired
};


export default Card