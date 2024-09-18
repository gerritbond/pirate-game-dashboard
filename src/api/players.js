import { config } from "../utils/config";

export const fetchPlayersByGameId = async (gameId) => {
  if (!gameId) {
    throw new Error("Game ID is required");
  }

  const response = await fetch(`${config.baseUrl}/players?gameId=${gameId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }

  return response.json();
};

export const createPlayer = async (player) => {
  const request = {
    name: player.name,
    email: player.email,
    gameId: player.gameId,
  };

  const response = await fetch(`${config.baseUrl}/players`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Failed to create player");
  }

  return response.json();
};

export const updatePlayer = async (player) => {
  if (!player.id) {
    throw new Error("Player ID is required");
  }

  const request = {
    name: player.name,
    email: player.email,
  };

  const response = await fetch(`${config.baseUrl}/players/${player.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Failed to update player");
  }

  return response.json();
};

export const deletePlayer = async (playerId) => {
  const response = await fetch(`${config.baseUrl}/players/${playerId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete player");
  }

  return response.json();
};
