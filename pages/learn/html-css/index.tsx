import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | HTML-CSS - Materi Pembelajaran HTML CSS Bellshade'
      metaImage='/meta-image/learn/html-css.png'
    >
      <WrapperTemplate>
        <div className='my-5 flex justify-center'>
          <h1 className='mb-5 title-2'>Coming Soon!</h1>
        </div>
      </WrapperTemplate>
    </Layout>
  );
}
