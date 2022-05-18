import UnorderedList from "../../../components/List/UnorderedList";
import SyntaxHighlighter from "../../../components/SyntaxHighlighter";
import Layout from '../../../components/Template/Layout'
import WrapperTemplate from "../../../components/Template/WrapperTemplate";
import data_json from "../../../data-json/java/basic/008_pengkondisian-switch-case.json";

export default function Page() {
    return (    
        <Layout pageTitle="Bellshade | Java - Struktur Kontrol (Switch-Case)">
            <WrapperTemplate>
                <section className="my-5">
                    <h2 className="title-2">Pengkondisian If-Else</h2>
                    <p className="section_text">
                        Syarat khusus pada java meliputi :
                    </p>
                    <UnorderedList className="section_text">
                        {
                            data_json.requirements.map((data, key) => (
                                <li key={key}>
                                    <p>{data}</p>
                                </li>
                            ))
                        }
                    </UnorderedList>
                    <p className="section_text">
                        Contoh:
                    </p>
                    <SyntaxHighlighter code={data_json.code} />
                </section>
            </WrapperTemplate>
        </Layout>
    )
}