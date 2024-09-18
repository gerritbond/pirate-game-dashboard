export const fetchFeaturesByGameId = async (gameId) => {
  if (!gameId) {
    throw new Error("Game ID is required");
  }

  const response = await fetch(`/api/features?gameId=${gameId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch features");
  }

  return response.json();
};

export const toggleFeature = async (featureId) => {
  if (!featureId) {
    throw new Error("Feature ID is required");
  }

  const response = await fetch(`/api/features/${featureId}/toggle`, {
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error("Failed to toggle feature");
  }

  return response.json();
};
