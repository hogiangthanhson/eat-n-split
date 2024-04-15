import { useState } from "react";
import Button from "./Button";

interface FormAddFriendProp {
  onAddFriend: (friend: any) => void;
}

export default function FormAddFriend({ onAddFriend }: FormAddFriendProp) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend: any = { name, image: `${image}?u=${id}`, balance: 0, id };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend-name">🧑‍🤝‍🧑 Friend Name</label>
      <input type="text" id="friend-name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="image-url">🖼️ Image URL</label>
      <input type="text" id="image-url" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}
