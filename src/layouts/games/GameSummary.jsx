import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPlayersByGameId } from "../../api/players";
import { Loading } from "../../components/Loading";
import { Table, TableWithAction } from "../../components/Table";
import { LinkButton } from "../../components/FormElements";
export const GameSummary = ({ game }) => {
  const { data: players, isLoading } = useQuery({
    queryKey: ["players", game?.id],
    queryFn: () => fetchPlayersByGameId(game?.id),
  });

  return (
    <Loading isLoading={isLoading}>
      <div className="flex flex-col gap-4 text-yellow-500">
        <div className="flex flex-col gap-2 p-10">
          <h1 className="text-2xl font-bold">{game?.name}</h1>
          <p className="text-lg text-gray-500">{game?.description}</p>
        </div>

        <TableWithAction
          headers={[
            { key: "name", display: "Name" },
            { key: "email", display: "Email" },
          ]}
          data={players}
          sideLabel="Players"
          emptyComponent={<div>No Players yet -- invite some!</div>}
          actionName="Edit"
          actionComponent={(row) => (
            <LinkButton label="Edit" to={`/players/${row?.id}`} />
          )}
        />
      </div>
    </Loading>
  );
};
