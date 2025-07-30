import boardMembers from "@/data/BoardInfo";
import Card from "@/components/board/Card";

const CardMapping = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="grid grid-cols-1 gap-x-20 md:grid-cols-3">
        {boardMembers.map(({ name, role, image }, index) => (
          <Card key={index} name={name} role={role} image={image} />
        ))}
      </div>
    </div>
  );
};

export default CardMapping;
