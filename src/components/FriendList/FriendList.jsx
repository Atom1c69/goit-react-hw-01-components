import "../../data/friends.json";
import FriendListItem from "../FriendListItem/FriendListItem"

 const FriendList = () => (
<ul className={css.friend_list}>
  <FriendListItem/>
</ul>)
export default FriendList;