import PageNavigation from "@/app/components/PageNavigation";
import { works } from "@/app/works-data";
import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = works.find((w) => w.slug === slug);

  if (!project) {
    return <div>作品が見つかりません</div>;
  }

  return (
    <main style={{ padding: "20px" }}>
      {/* <PageNavigation currentSlug={slug}/> */}
      <h3 style={{textAlign:"center"}}>{project.title}</h3>
      <div style={{textAlign:"center"}}>
        {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{maxWidth: "100%", height: "auto", margin: "30px 0"}}
        />
      )}
      </div>
      <div style={{textAlign:"center",margin:"20px 0 60px 0"}}>
        {project.vercelUrl ? (
          <Link href={project.vercelUrl} className="nav-btn" target="_blank">
            アプリを見る
          </Link>
        ):( 
          <span style={{visibility:"hidden"}}></span>
        )}
      </div>

      <div style={{marginTop:"30px"}}>
        <h4>概 要</h4>
        <p style={{whiteSpace:"pre-wrap",lineHeight:"1.6",margin:"0 30px"}}>
          {project.description}
        </p>
      </div>

      <div style={{marginTop: "30px"}}>
        <h4>{project.contenttitle}</h4>
        <p style={{whiteSpace: "pre-wrap", lineHeight: "1.6",margin:"0 30px"}}>
          {project.content}
        </p>
      </div>
      <PageNavigation currentSlug={slug}/>
    </main>
  );
}
