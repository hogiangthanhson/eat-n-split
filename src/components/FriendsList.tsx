import { IFriend } from "../interface";
import Friend from "./Friend";

interface FriendListProp {
  friends: IFriend[];
  onSelection: (friend: IFriend) => void;
  selectedFriend: IFriend;
}
export default function FriendsList({ friends, onSelection, selectedFriend }: FriendListProp) {
  return (
    <ul className="">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
