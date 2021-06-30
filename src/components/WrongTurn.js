import { GiPineapple } from "react-icons/gi";
const WrongTurn = () => {
  return (
    <div className="wrong">
      <div className="rotatingPineapple">
        <div className="left">
          <GiPineapple />
        </div>
        Oh no!
        <div className="right">
          <GiPineapple />
        </div>
      </div>
      You took a wrong turn somewhere...
    </div>
  );
};

export default WrongTurn;
