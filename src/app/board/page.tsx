import Header from "@/components/header";
import CardMapping from "@/components/board/CardMapping";

const Board = () => {
  return (
    <div className="bg-tsu-beige-300">
      <Header header="Meet The Board" />
      <CardMapping />
    </div>
  );
};

export default Board;
