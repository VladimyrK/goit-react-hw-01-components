import Profile from './components/social-profile/Profile'
import Statistics from './components/statistics/Statistics'
import FriendList from './components/friend-list/FriendList'
import TransactionHistory from './components/transaction-history/TransactionHistory'
import { name, tag, location, avatar, stats } from './components/social-profile/user.json'
import statistics from './components/statistics/statistical-data.json'
import friends from './components/friend-list/friends.json'
import transactions from './components/transaction-history/transactions.json'

function App() {
  return (
    <div className="App">
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics items={statistics} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App
