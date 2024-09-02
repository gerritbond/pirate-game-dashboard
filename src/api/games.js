import { config } from "../utils/config";

export const fetchGames = async () => {
  const response = await fetch(`${config.baseUrl}/games`);

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
};

export const fetchGame = async (gameId) => {
  const response = await fetch(`${config.baseUrl}/games/${gameId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch game");
  }

  return response.json();
};

export const createGame = async (game) => {
  const request = {
    name: game.name,
    description: game.description,
  };

  const url = `${config.baseUrl}/games`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Failed to create game");
  }

  return response.json();
};

export const updateGame = async (game) => {
  const request = {
    name: game.name,
    description: game.description,
  };

  const response = await fetch(`${config.baseUrl}/games/${game.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Failed to update game");
  }

  return response.json();
};

export const deleteGame = async (gameId) => {
  const response = await fetch(`${config.baseUrl}/games/${gameId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete game");
  }

  return response.json();
};
