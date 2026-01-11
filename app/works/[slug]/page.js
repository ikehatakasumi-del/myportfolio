
// // app/works/[slug]/page.js
// import { works } from "@/app/works-data"; // パスが合っているか確認してください
// import { notFound } from "next/navigation";

// export default async function ProjectDetail({ params }) {
  
//   const { slug } = await params;
//   const project = works.find((w) => w.slug === slug);

//   // もしデータが見つからなかったら 404 ページを出す
//   if (!project) {
//     notFound();
//   }

//   return (
//     <main style={{ padding: "20px" }}>
//       <h1>{project.title}</h1>
      
//       {project.image && (
//         <img 
//           src={project.image} 
//           alt={project.title} 
//           style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }} 
//         />
//       )}

//       <div style={{ marginTop: "30px" }}>
//         <h3>概要</h3>
//         <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
//           {project.description}
//         </p>
//       </div>

//       <div style={{ marginTop: "30px" }}>
//         <h3>{project.contenttitle}</h3>
//         <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
//           {project.content}
//         </p>
//       </div>
//     </main>
//   );
// }


import { works } from "@/app/works-data";
import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = works.find((w) => w.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>{project.title}</h1>
      
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }} 
        />
      )}

      <div style={{ marginTop: "30px" }}>
        <h4>概要</h4>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
          {project.description}
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h4>{project.contenttitle}</h4>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
          {project.content}
        </p>
      </div>
    </main>
  );
}