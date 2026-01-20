import Image from "next/image";
const WorksCard = ({work}) => {
    return (
        <div className="works-thumbnail">
            <Image
            src={work.image}
            alt={work.title}
            width={300} //400
            height={200} //300
            className="works-image"
            />
            <p>{work.title}</p>
            {/* <p style={{border:"2px solid #A53DFF",borderRadius:"6px",color:"black",fontWeight:"normal",fontSize:"16px",display:"inline-block",padding:"6px",margin:"0 auto"}}>View Project</p> */}
        </div>
    );
};
export default WorksCard;
