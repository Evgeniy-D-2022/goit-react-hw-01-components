import user from '../Data/user.json'
import { Profile } from './Profile/Profile'
import data from '../Data/data.json'
import { Statistics } from './Statistics/Statistics'





export const App = () => {
  return (
    <> 
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}></Profile>
<Statistics
  title="Upload stats" stats={data}></Statistics>
  </>
  );
};
