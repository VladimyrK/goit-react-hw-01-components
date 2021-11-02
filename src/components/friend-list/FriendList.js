import PropTypes from 'prop-types'
import s from './FriendList.module.css'
import FriendListItem from './FriendListItem'

const FriendList = ({ items }) => {
  return (
    <ul className={s.friendList}>
      {items.map(item => (
        <FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} id={item.id} />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
}

export default FriendList
