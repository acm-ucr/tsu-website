import boardMembers from "@/data/BoardInfo";
import Card from "@/components/board/Card";

const CardMapping = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="grid grid-cols-3 gap-x-20">
        {boardMembers.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardMapping;
