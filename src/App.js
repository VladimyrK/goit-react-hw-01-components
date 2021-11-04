import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import { name, tag, location, avatar, stats } from './data/user.json'
import statistics from './data/statistical-data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

function App() {
  return (
    <div className="App">
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" items={statistics} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App
