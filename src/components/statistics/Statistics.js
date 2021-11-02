import PropTypes from 'prop-types'
import s from './Statistics.module.css'

const Statistics = ({ items }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statList}>
        {items.map(item => (
          <li key={item.id} className={s.item}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
}

export default Statistics
