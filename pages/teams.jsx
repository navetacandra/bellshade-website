import Image from "next/image";
import Layout from "@/components/Template/Layout";
import Members from "@/data-json/bellshade-member.json";

export default function Page() {
  return (
    <Layout pageTitle="Bellshade | Teams" metaImage="/meta-image/team.png">
      <section className="w-full m-auto" style={{ width: "90%" }}>
        <div className="w-full mb-16 md:mb-20 text-center">
          <h2 className="text-5xl md:text-[67px] font-bold text-dark dark:text-white">
            Meet Our Team
          </h2>
        </div>
        <div className="container mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-5">
            {Members.map((val, i) => (
              <a
                href={`https://github.com/${val.username}`}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                <div className="inline-flex gap-4 p-4 w-full shadow-md bg-white dark:bg-slate-800 rounded-md transition-all hover:shadow-lg dark:hover:bg-slate-700 cursor-pointer">
                  <div className="mx-1 relative max-w-max tooltip top max-h-16 my-auto">
                    <div className="relative flex justify-start items-center rounded-full overflow-hidden w-16 h-16 shadow-lg">
                      <Image
                        src={`https://res.cloudinary.com/demo/image/fetch/${val.avatar}`}
                        alt={`${val.username}'s Profile Pict`}
                        layout="fill"
                        className="w-full rounded-full"
                      />
                    </div>
                  </div>
                  <div className="pt-1 w-full mx-7">
                    <span className="name md:text-lg font-semibold whitespace-normal text-dark dark:text-slate-300">
                      {val.name}
                    </span>
                    <span className="name my-1 md:text-md font-semibold whitespace-normal text-slate-800 dark:text-slate-300 block">
                      {val.username}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
