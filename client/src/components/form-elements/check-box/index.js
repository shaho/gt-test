import { Button } from "./styles";

function Checkbox({ label = "", selected = false, handler, slug = "" }) {
  return (
    <Button
      className={selected ? "selected" : ""}
      onClick={() => handler(slug)}
    >
      <span className="checkbox">
        <img src="/images/checkbox.svg" alt="checkbox" />
      </span>
      <span>{label}</span>
    </Button>
  );
}

export default Checkbox;
