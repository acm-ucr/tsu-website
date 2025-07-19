import BoardHeader from "@/components/board/header";
import CardMapping from "@/components/board/CardMapping";

const Board = () => {
  return (
    <div className="bg-tsu-beige-300">
      <BoardHeader />
      <CardMapping />
    </div>
  );
};

export default Board;
