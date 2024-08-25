import { Profile } from '../components/Profile/Profile';
import user from '../data/user.json';

import { Statistics } from '../components/Statistics/Statistics';
import statistics from '../data/statistics.json';

import { FriendsList } from '../components/FriendsList/FriendsList'
import friends from '../data/friends.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="UPLOAD STATS" stats={statistics} />

      <FriendsList friends={friends} />
    </div>
  );
};
