import Feed from '../components/Feed/Feed';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft';
import Navbar from '../components/Navbar';

function FollowingFeed() {
  return (
    <>
      <HeaderLeft />
      <Feed />
      {/* <Recommended /> */}
      <h1>stuf ur following:</h1>
    </>
  );
}

export default FollowingFeed;
