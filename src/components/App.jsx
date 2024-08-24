import { Profile } from '../components/Profile/Profile';
import user from '../data/user.json'

import {Statistics} from '../components/Statistics/Statistics'
import statistics from '../data/statistics.json'
 
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};


