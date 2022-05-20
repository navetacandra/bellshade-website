import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/java/basic/001_pendahuluan.json";

export default function Page() {
  return (
    <Layout pageTitle="Bellshade | Java - Pendahuluan Pemrograman dan Java">
      <WrapperTemplate>
        <h2 className="title-2">Pendahuluan</h2>
        <h4 className="subtitle-h4">Menulis Program Java</h4>
        <SyntaxHighlighter code={dataJson.code} />
      </WrapperTemplate>
    </Layout>
  );
}
