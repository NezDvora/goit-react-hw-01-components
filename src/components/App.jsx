import user from './DataJSON/user.json';
import data from './DataJSON/data.json';
// import friends from './DataJSON/friends';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
// import FriendList from './FriendList/FriendList';

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
    </div>
  );
};
