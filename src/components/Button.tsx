import { IButton } from "../interface";

export default function Button({ onClick, children }: IButton) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
