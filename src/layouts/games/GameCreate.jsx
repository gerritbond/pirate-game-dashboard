import { ContextualDashboardLayout } from "../ContextualDashboardLayout";
import { GameForm } from "./GameForm";

export const GameCreate = () => {
  return (
    <ContextualDashboardLayout
      primaryPanel={() => <GameForm mode="create" />}
      contextualNavigation={[]}
      actionBar={[]}
    />
  );
};
