import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Golang - Materi Pembelajaran Golang Bellshade'
      metaImage='/meta-image/learn/golang.png'
    >
      <WrapperTemplate>
        <div className='my-5 flex justify-center'>
          <h1 className='mb-5 title-2'>Coming Soon!</h1>
        </div>
      </WrapperTemplate>
    </Layout>
  );
}
