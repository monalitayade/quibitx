import CallBack from "@/components/CallBack/CallBack";
import IdeaBlock from "@/components/IdeaBlock/IdeaBlock";
import MainBanner from "@/components/MainBanner/MainBanner";
import VideoThumbnailSection from "@/components/VideoThumbnailSection/VideoThumbnailSection";
import Image from "next/image";

export default function Home() {
  const handleIdeaSections = [
    {
      img: "/images/idea.png",
      title: "Innovation idea",
      description:
        "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu.r adipiscing elit.",
    },
    {
      img: "/images/market-research.png",
      title: "Market research",
      description:
        "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu.r adipiscing elit.",
    },
    {
      img: "/images/creative-team.png",
      title: "Creative team",
      description:
        "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu.r adipiscing elit.",
    }
  ]

  const handleServicesSections = [
    {
      img: "/images/idea.png",
      title: "It Management",
      description:
        "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu.r adipiscing elit.",
    },
    {
      img: "/images/market-research.png",
      title: "IT Consultancy",
      description:
        "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu.r adipiscing elit.",
    },
    {
      img: "/images/creative-team.png",
      title: "IT Support Helpdesk",
      description:
        "Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu.r adipiscing elit.",
    }
  ]
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary  text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <MainBanner />  
      <div className="w-full flex items-center justify-center py-24 px-8 [&>*:nth-child(3)]:mr-0 ipad:flex-wrap  ipad:[&>*:nth-child(2)]:mr-0 mobile:py-[40px] mobile:px-[16px]">
        {
          handleIdeaSections?.map((section, index) => (
            <IdeaBlock 
            key={index} 
            img={section.img} 
            title={section.title} 
            description={section.description} 
            blockType="idea"
          />
          ))
        }
        {/* <IdeaBlock />
        <IdeaBlock />
        <IdeaBlock /> */}
      </div>
      <div className="w-full">
        <VideoThumbnailSection />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-24 [&>*:nth-child(3)]:mr-0 ipad:flex-wrap  ipad:[&>*:nth-child(2)]:mr-0 mobile:py-[40px] mobile:px-[16px]">
      <div className="flex justify-center items-center text-4xl font-sans font-semibold text-primary mb-8 mobile:text-xl mobile:my-2">
      Our Services</div>
      <p className="flex justify-center items-center text-xl text-center  font-sans text-slate-600 mb-8 tablet:px-7 mobile:text-sm mobile:my-2 "> We help agencies to define their new business objectives and then create the road map</p>
          <div className="w-full flex items-center justify-center px-8 [&>*:nth-child(3)]:mr-0 ipad:flex-wrap  ipad:[&>*:nth-child(2)]:mr-0 mobile:py-[20px] mobile:px-[16px]">
           
            {
              handleServicesSections?.map((section, index) => (
                <IdeaBlock 
                key={index} 
                img={section.img} 
                title={section.title} 
                description={section.description} 
                blockType="services"
              />
              ))
            }
            </div>
      </div>
      <div className="w-full flex mb-4 px-10 mobile:px-4">
        <CallBack />
      </div>
    </div>
  );
}
