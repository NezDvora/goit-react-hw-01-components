import user from './DataJSON/user.json';
import data from './DataJSON/data.json';
import friends from './DataJSON/friends.json';
import transactions from './DataJSON/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="myContainer">
      <div className="mySections myProfile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="mySections">
        {' '}
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className="mySection">
        {' '}
        <FriendList friends={friends} />
      </div>

      <div className="mySections">
        {' '}
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
