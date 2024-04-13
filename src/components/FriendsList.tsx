import { IFriend } from "../interface";
import Friend from "./Friend";

export default function FriendsList({ friends }: { friends: IFriend[] }) {
  return (
    <ul className="">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
