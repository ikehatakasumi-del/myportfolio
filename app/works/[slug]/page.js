// import { works } from "@/app/works-data";
// import { notFound } from "next/navigation";
// import Image from "next/image";

// export default async function WorkDetailPage(props) {
//   const params = await props.params; 
//   const { slug } = params;

//   const work = works.find(w => w.slug === slug);

//   if (!work) {
//     notFound();
//   }

//   return (
//     <main style={{margin:"20px"}}>
//       <Image src={work.image} alt={work.title} width={370} height={300}/>
//       <h1>
//         {work.title}
//       </h1>
//       <pre style={{fontSize: "20px", lineHeight: "1.6"}}>
//         {work.description}
//       </pre>
//       <h4>
//         {work.contenttitle}
//       </h4>
//       <pre style={{ fontSize: "20px", lineHeight:"1.6"}}>
//         {work.content}
//       </pre>
//     </main>
//   );
// }


// app/works/[slug]/page.js
import { works } from "@/app/works-data"; // パスが合っているか確認してください
import { notFound } from "next/navigation";

// params を受け取る関数に async をつける
export default async function ProjectDetail({ params }) {
  
  // 【最重要】最新のNext.jsでは params を await する必要があります
  const { slug } = await params;

  // works-data.js の配列から、URLのslugと一致するデータを探す
  const project = works.find((w) => w.slug === slug);

  // もしデータが見つからなかったら 404 ページを出す
  if (!project) {
    notFound();
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>{project.title}</h1>
      
      {/* 画像のパスが正しいか確認 */}
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title} 
          style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }} 
        />
      )}

      <div style={{ marginTop: "30px" }}>
        <h3>概要</h3>
        {/* \n による改行を反映させるために pre-wrap を指定 */}
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
          {project.description}
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>{project.contenttitle}</h3>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
          {project.content}
        </p>
      </div>
    </main>
  );
}