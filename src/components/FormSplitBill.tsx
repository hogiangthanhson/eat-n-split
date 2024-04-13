import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label htmlFor="">💰 Bill value</label>
      <input type="text" />
      <label htmlFor="">🕴️ You expense</label>
      <input type="text" />
      <label htmlFor="">🧑‍🤝‍🧑 X's expense</label>
      <input type="text" disabled />
      <label htmlFor="">🤑 Who is pay the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
