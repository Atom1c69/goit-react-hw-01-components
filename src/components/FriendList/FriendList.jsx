import "../../data/friends.json";
import FriendListItem from "../FriendListItem/FriendListItem"
import css from "../FriendListItem/FriendListItem.module.css";

 const FriendList = () => (
<ul className={css.friend_list}>
  <FriendListItem/>
</ul>)
export default FriendList;