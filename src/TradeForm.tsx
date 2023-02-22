import { useState } from "react";
import { observer } from "mobx-react";
import Athlete from "./Athlete";

interface IProps {
  athlete: Athlete;
}

const TradeForm = ({ athlete }: IProps) => {
  const [teamName, setTeamName] = useState<string>("");
  return (
    <>
      <input
        type="text"
        placeholder="Team name..."
        onChange={(e) => setTeamName(e.target.value)}
      />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
          Trade
        </button>
      </span>
    </>
  );
};

export default observer(TradeForm);
