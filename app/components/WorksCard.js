// import Link from "next/link"
import Image from "next/image";
const WorksCard = ({work}) => {
    return (
        <div>
            <Image
            src={work.image}
            alt={work.title}
            width={400}
            height={300}
            />
            <p>{work.title}</p>
            
            {/* <Link href={`/works/${work.slug}`}></Link> */}
        </div>
    );
};
export default WorksCard;
