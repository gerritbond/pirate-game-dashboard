import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createGame, updateGame } from "../../api/games";
import { Loading } from "../../components/Loading";
import {
  FormInput,
  FormTextArea,
  SubmitButton,
} from "../../components/FormElements";
import GameContext from "../../contexts/GameContext";

export const GameForm = ({ mode, game }) => {
  const [, setGameContext] = useContext(GameContext);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    id: "",
    ...game,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const game = {
      name: formData.name,
      description: formData.description || "",
    };

    console.log(game);

    if (mode === "create") {
      setIsFormLoading(true);
      const newGame = await createGame(game);
      setIsFormLoading(false);
      setGameContext(newGame);
      navigate(`/admin/games/${newGame.id}`);
    } else {
      setIsFormLoading(true);
      const updatedGame = await updateGame(game);
      setIsFormLoading(false);
      setGameContext(updatedGame);
      navigate(`/admin/games/${updatedGame.id}`);
    }
  };

  return (
    <Loading isLoading={isFormLoading}>
      <div className="flex-1">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex h-full items-center justify-center text-yellow-500"
        >
          <div className="grid grid-cols-5">
            <div className="col-start-2 pl-2 ">
              <h1 className="text-2xl font-bold">
                {mode === "create" ? "Create Game" : "Edit Game"}
              </h1>
            </div>
            <div className="col-start-2 col-span-3">
              <FormInput
                label="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="col-start-2 col-span-3">
              <FormTextArea
                label="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            <div className="col-start-2 col-span-3 text-right pr-2">
              <SubmitButton
                label={mode === "create" ? "Create Game" : "Update Game"}
              />
            </div>
          </div>
        </form>
      </div>
    </Loading>
  );
};
