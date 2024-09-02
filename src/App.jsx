import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameContext from "./contexts/GameContext";
import UserContext from "./contexts/UserContext";
import FleetLayout from "./layouts/fleet/Fleet";
import { CharacterSheetLayout } from "./layouts/character_sheet/CharacterSheet";
import { CharacterSelection } from "./layouts/characters/CharacterSelection";
import { CharacterCreate } from "./layouts/character_create/CharacterCreate";
import { ShipLayout } from "./layouts/ship/ShipLayout";
import { AdminPage } from "./layouts/admin/AdminPage";
import NavBar from "./components/NavBar";
import { HomeLayout } from "./layouts/home/HomeLayout";
import { GameDetail } from "./layouts/games/GameDetail";
import { GameCreate } from "./layouts/games/GameCreate";
import { ConfigProvider } from "./contexts/ConfigContext";
import { GameDetailNavigationStates } from "./layouts/games/GameDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const user = useState("gerrit");
  const game = useState(null);

  return (
    <div className="width-full height-full">
      <BrowserRouter>
        <ConfigProvider>
          <GameContext.Provider value={game}>
            <UserContext.Provider value={user}>
              <QueryClientProvider client={queryClient}>
                <div className="flex flex-col h-screen">
                  <NavBar />
                  <Routes>
                    <Route path="/" element={<HomeLayout />} />
                    <Route path="/home" element={<HomeLayout />} />
                    <Route path="/fleet" element={<FleetLayout />} />

                    <Route path="/ships">
                      <Route path=":shipId" element={<ShipLayout />} />
                      <Route path="fleet" element={<FleetLayout />} />
                    </Route>

                    <Route path="/characters">
                      <Route
                        path=":characterId"
                        element={<CharacterSheetLayout />}
                      />
                      <Route path="new" element={<CharacterCreate />} />
                      <Route path="roster" element={<CharacterSelection />} />
                    </Route>

                    <Route path="/admin">
                      <Route path="" element={<AdminPage />} />
                      <Route path="event-clocks" element={<AdminPage />} />
                      <Route path="games">
                        <Route
                          path=":gameId"
                          element={
                            <GameDetail
                              startingPanel={GameDetailNavigationStates.Game}
                            />
                          }
                        />
                        <Route path="new" element={<GameCreate />} />
                      </Route>
                    </Route>
                  </Routes>
                </div>
              </QueryClientProvider>
            </UserContext.Provider>
          </GameContext.Provider>
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root"); // Fetches the element
const root = createRoot(container); // Creates the React DOM on the top level element
root.render(<App />); // Creates the actual element
