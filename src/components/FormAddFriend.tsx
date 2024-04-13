import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form action="" className="form-add-friend">
      <label htmlFor="">🧑‍🤝‍🧑 Friend Name</label>
      <input type="text" />

      <label htmlFor="">🖼️ Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}
