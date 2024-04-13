import { IFriend } from "../interface";
import Button from "./Button";

export default function Friend({ friend }: { friend: IFriend }) {
  function renderBalance(friend: IFriend) {
    if (friend.balance < 0) {
      return (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      );
    } else if (friend.balance === 0) {
      return <p>You and {friend.name} are even</p>;
    } else {
      return (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      );
    }
  }

  return (
    <li className="">
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {renderBalance(friend)}
      <Button>Select</Button>
    </li>
  );
}
