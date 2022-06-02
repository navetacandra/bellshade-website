import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import dataJson from "@/data-json/java/basic/001_pendahuluan.json";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Java - Pendahuluan Pemrograman dan Java'
      metaImage='/meta-image/learn/java/basic/pendahuluan-pemrograman-dan-java.png'
    >
      <WrapperTemplate>
        <h1 className='title-2'>Pendahuluan</h1>
        <h2 className='subtitle-h4'>Menulis Program Java</h2>
        <SyntaxHighlighter code={dataJson.code} />
      </WrapperTemplate>
    </Layout>
  );
}
