import { useState } from "react";
import { IFriend } from "../interface";
import Button from "./Button";

interface FormSplitBillProp {
  selectedFriend: IFriend;
  onSplitBill: (value: any) => void;
}
export default function FormSplitBill({ selectedFriend, onSplitBill }: FormSplitBillProp) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" id="bill" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <label htmlFor="expense">🕴️ You expense</label>
      <input
        type="text"
        id="expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))
        }
      />
      <label htmlFor="friend-expense">🧑‍🤝‍🧑 {selectedFriend.name}'s expense</label>
      <input type="text" id="friend-expense" disabled value={paidByFriend} />
      <label htmlFor="who-pays">🤑 Who is pay the bill</label>
      <select
        name=""
        id="who-pays"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
