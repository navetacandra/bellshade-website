import Link from "next/link";
import Layout from "@/components/Template/Layout";
import WrapperTemplate from "@/components/Template/WrapperTemplate";
import UnorderedList from "@/components/List/UnorderedList";
import TextStyle from "@/components/TextStyle";
import dataJson from "@/data-json/assembly/000_home.json";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

export default function Page() {
  return (
    <Layout
      pageTitle='Bellshade | Assembly'
      metaImage='/meta-image/learn/assembly.png'
    >
      <WrapperTemplate>
        <section className='my-5'>
          <div className='text-center mb-3'>
            <h1 className='title-1'>Assembly</h1>
          </div>
          <div className='container mx-auto px-auto'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-slate-200'>
                  <tr>
                    <th className='px-6 py-3'>#</th>
                    <th className='px-6 py-3'>Topik</th>
                    <th className='px-6 py-3'>Target Pembelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  {dataJson.alur_belajar.map((val, key) => (
                    <tr
                      key={key}
                      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                    >
                      <td className='font-semibold text-base px-6 py-4 text-gray-900 dark:text-white whitespace-nowrap'>
                        {val.langkah}
                      </td>
                      <td className='px-6 py-4'>
                        {val.status === "done" && val.id ? (
                          <p className='text-blue_primary text-base'>
                            <Link
                              href={`/learn/java/basic/${val.id
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                            >
                              {val.topik}
                            </Link>
                          </p>
                        ) : (
                          <p className='text-slate-400 text-base'>
                            {`${val.topik} - On Progress`}
                          </p>
                        )}
                      </td>
                      <td className='px-6 py-4 text-base text-slate-400'>
                        <TextStyle Text={val.target_pembelajaran} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className='my-5'>
          <UnorderedList className='section_text'>
            <div className='my-3'>
              <li>Linux</li>
              <UnorderedList>
                <li className='mb-3'>
                  <div>
                    <p className='section_text'>
                      debian based (deb) install melalui terminal dengan
                      perintah
                    </p>
                    <SyntaxHighlighter
                      code={["#_[sudo apt-get install nasm]"]}
                    />
                    <p className='section_text'>cek versi dari nasm</p>
                    <SyntaxHighlighter code={["#_[nasm --version]"]} />
                  </div>
                </li>
                <li className='mb-3'>
                  <div>
                    <p className='section_text'>
                      <TextStyle Text='rpm (arch, fedora) instal melalui perintah dari #mark_code[dnf] atau #mark_code[yum] dengan install #mark_code[nasm.repo] di #mark_code[etc/yum/yum.repos.d] file #mark_code[nasm.repo]' />
                    </p>
                    <SyntaxHighlighter
                      code={[
                        "#_[[nasm]]",
                        "#_[name=The Netwide Assembler]",
                        "#_[baseurl=http://www.nasm.us/pub/nasm/stable/linux/]",
                        "#_[enabled=1]",
                        "#_[gpgcheck=0]",
                        "",
                        "#_[[nasm-testing]]",
                        "#_[name=The Netwide Assembler (release candidate builds)]",
                        "#_[baseurl=http://www.nasm.us/pub/nasm/testing/linux/]",
                        "#_[enabled=0]",
                        "#_[gpgcheck=0]",
                        "",
                        "#_[[nasm-snapshot]]",
                        "#_[name=The Netwide Assembler (daily snapshot builds)]",
                        "#_[baseurl=http://www.nasm.us/pub/nasm/snapshots/latest/linux/]",
                        "#_[enabled=0]",
                        "#_[gpgcheck=0]",
                      ]}
                    />
                  </div>
                </li>
              </UnorderedList>
            </div>
            <div className='my-3'>
              <li>Mac</li>
              <p className='section_text'>
                <TextStyle Text='lakukan perintah pada teriminal dengan perintah brew (untuk membuka terminal dilakukan dengan cara tombol #mark_code[command] + #mark_code[spasi])' />
              </p>
              <SyntaxHighlighter
                code={[
                  '#_[ruby -e ] #g["$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" ] #_[2> /dev/null]',
                ]}
              />
            </div>
            <div className='my-3'>
              <li>Windows</li>
              <p className='section_text'>
                installasi pada windows support pada arsitektur 64bit dengan
                file donwload dibawah ini{" "}
                <Link href='https://www.nasm.us/pub/nasm/releasebuilds/2.14.02/win64/'>
                  <span className='text-blue_primary cursor-pointer'>
                    NASM windows installer
                  </span>
                </Link>
              </p>
              <p className='section_text'>
                sebelumnya install terlebih dahulu codeblocks{" "}
                <Link href='https://www.codeblocks.org/downloads/'>
                  <span className='text-blue_primary cursor-pointer'>
                    disini
                  </span>
                </Link>
              </p>
              <p className='section_text'>
                untuk tutorial lebih lanjut bisa diliat{" "}
                <Link href='https://www.wikihow.com/Run-NASM-on-Windows'>
                  <span className='text-blue_primary cursor-pointer'>
                    disini
                  </span>
                </Link>
              </p>
            </div>
          </UnorderedList>
        </section>
      </WrapperTemplate>
    </Layout>
  );
}
