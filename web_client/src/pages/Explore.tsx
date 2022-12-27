import Feed from '../components/Feed/Feed';
import HeaderLeft from '../components/HeaderLeft/HeaderLeft';
import Recommended from '../components/Recommended/Recommended';

function Explore() {
  return (
    <>
      <HeaderLeft />
      <Feed />
      <Recommended />
      <h1>stuf we recommend:</h1>
    </>
  );
}

export default Explore;
