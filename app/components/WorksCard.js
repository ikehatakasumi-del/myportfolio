import Image from "next/image";
const WorksCard = ({work}) => {
    return (
        <div>
            <Image
            src={work.image}
            alt={work.title}
            width={400}
            height={300}
            className="works-image"
            />
            <p>{work.title}</p>
        </div>
    );
};
export default WorksCard;
