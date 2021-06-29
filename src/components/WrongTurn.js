import { GiPineapple } from "react-icons/gi";
const WrongTurn = () => {
  return (
    <div className="wrong">
      <p>
        {" "}
        <i className="left">
          <GiPineapple />
        </i>
        Oh no!
        <i className="right">
          <GiPineapple />
        </i>
      </p>{" "}
      It seems ou took a wrong turn somewhere...
    </div>
  );
};

export default WrongTurn;
