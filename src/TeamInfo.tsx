import { observer } from "mobx-react";
import { useTeamStore } from "./TeamStore";

// eslint-disable-next-line mobx/missing-observer
const TeamNameInfo = () => {
  const { teamName, setMascot } = useTeamStore();
  return (
    <>
      <h1 style={{ marginBottom: 1 }}>Team: {teamName}</h1>
      <input
        type="text"
        placeholder="Change mascot"
        onChange={(e) => setMascot(e.target.value)}
        style={{ marginBottom: 8 }}
      />{" "}
    </>
  );
};

export default observer(TeamNameInfo);
