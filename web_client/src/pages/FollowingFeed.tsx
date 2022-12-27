import Feed from '../components/Feed/Feed';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft';
import Recommended from '../components/Recommended/Recommended';

function FollowingFeed() {
  return (
    <>
      <HeaderLeft />
      <Feed />
      <Recommended />
    </>
  );
}

export default FollowingFeed;
