import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PiratesContext from "./contexts/PiratesContext";
import UserContext from "./contexts/UserContext";
import FleetLayout from "./layouts/fleet/Fleet";
import { CharacterSheetLayout } from "./layouts/character_sheet/CharacterSheet";
import { CharacterSelection } from "./layouts/characters/CharacterSelection";
import { CharacterCreate } from "./layouts/character_create/CharacterCreate";
import { ShipLayout } from "./layouts/ship/ShipLayout";

import NavBar from "./components/NavBar";
import { HomeLayout } from "./layouts/home/HomeLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// We can use useParams in other components to get information
// passed in through a route because  BrowserRouter is the
// top level component. If we break into multiple brwoser routers
// we would have separate contexts to reach into as well.
const App = () => {
  const pirates = useState(null);
  const user = useState(null);
  //p-0 m-0 is 0 padding and 0 margin
  return (
    <div className="width-full height-full">
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <QueryClientProvider client={queryClient}>
            <PiratesContext.Provider value={pirates}>
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
                </Routes>
              </div>
            </PiratesContext.Provider>
          </QueryClientProvider>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root"); // Fetches the element
const root = createRoot(container); // Creates the React DOM on the top level element
root.render(<App />); // Creates the actual element
