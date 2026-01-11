import { works } from "../works/[slug]/page";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function WorkDetailPage(props) {
  const { slug } = props.params; // await は不要

  const work = works.find(w => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <main style={{ margin: "20px" }}>
      <Image src={work.image} alt={work.title} width={370} height={300} />
      <h1>{work.title}</h1>
      <pre style={{ fontSize: "20px", lineHeight: "1.6" }}>
        {work.description}
      </pre>
      <h4>{work.contenttitle}</h4>
      <pre style={{ fontSize: "20px", lineHeight: "1.6" }}>
        {work.content}
      </pre>
    </main>
  );
}
