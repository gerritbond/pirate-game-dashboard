import { PageableCardsGrid } from "../../components/PageableCardsGrid";
import { BsTrash } from "react-icons/bs";

export const GamesSelectionPanel = ({ games }) => {
  const deleteGameModal = () =>
    console.log(
      "TODO, Implement delete game modal confirmation and operations"
    );

  return (
    <PageableCardsGrid
      entities={games}
      itemLinkPath={"/admin/games"}
      centerButton={{
        path: "/admin/games/new",
        name: "Create New Game",
      }}
      optionalFunc={deleteGameModal}
      optionalFuncIcon={<BsTrash className="w-full" />}
      pageSize={8}
      placeholderImage={"/images/empty-spaceport.jpg"}
      placeholderText={"Unknown Story"}
    />
  );
};
