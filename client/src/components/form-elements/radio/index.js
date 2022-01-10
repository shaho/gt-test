import { Button } from "./styles";

const Radio = ({ label = "", selected = false, handler, slug = "" }) => (
  <Button className={selected ? "selected" : ""} onClick={() => handler(slug)}>
    <span className="radio">
      <img src="/images/radio.svg" alt="radio" />
    </span>
    <span>{label}</span>
  </Button>
);
export default Radio;
