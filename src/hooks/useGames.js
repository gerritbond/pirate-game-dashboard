import { useQuery } from "@tanstack/react-query";
import { fetchGames } from "../api/games";

export const useGames = () => {
  const results = useQuery({ queryKey: ["games"], queryFn: fetchGames });

  return [results?.data?.games ?? [], results.status];
};
