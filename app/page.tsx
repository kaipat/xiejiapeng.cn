import Net from "@/components/net";
import DiscordIcon from "@/components/icons/discord";
import GithubIcon from "@/components/icons/github";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-full relative bg-[url('/images/home-bg.webp')] bg-cover bg-bottom before:h-16 before:block after:h-16 after:block flex flex-col justify-center items-center">
      <div
        className="absolute inset-x-0 bottom-0 h-1/4 lg:h-1/3 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <Net/>
      </div>
      <div className="relative w-3/4 lg:w-1/2 m-auto">
        <div className="flex absolute -top-px h-[1px] w-2/3 left-1/2 -translate-x-1/2">
          <div
            className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div
            className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div
            className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div
            className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
        <div
          className="absolute -inset-y-8 -left-2 w-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div
          className="absolute -inset-y-8 -right-2 w-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div
          className="absolute -inset-x-8 top-0 h-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div
          className="absolute -inset-x-8 bottom-0 h-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div className="p-6 leading-loose">
          <p><span className="text-3xl sm:text-xlfont-semibold">Hey</span>, I am <span
            className="font-semibold">XieJiaPeng</span>, a front-end developer.</p>
          <p className="mb-3">Working at Hugecore Ltd.</p>
          <p className="mb-2">I immerse myself in the dynamic world of web development, specializing in JavaScript and TypeScript. With Vue, React, and Tailwind CSS as my trusted companions, I craft engaging user experiences that resonate with modern design trends and user expectations. Additionally, I leverage the power of NestJS to architect robust backend solutions, ensuring seamless integration and functionality across my applications.</p>
          <p className="mb-2">Fuelled by an insatiable curiosity, I approach each project as an opportunity to expand my knowledge and skills. Whether it&apos;s exploring emerging technologies or diving deep into intricate coding challenges, I embrace the role of a perpetual student, constantly seeking to uncover the unknown and refine my craft.</p>
          <p className="mb-2">Beyond the realm of technology, I find solace and inspiration in simpler pleasures. Sharing moments over tea with my family brings a sense of tranquility, while indulging in cinematic experiences provides a welcome escape from the demands of the digital world. Moreover, my newfound passion for literature has led me to explore the realm of writing, adding yet another dimension to my life&apos;s journey.</p>
          <p className="mb-2">In the convergence of creativity and code, I discover not only solutions to technical problems but also avenues for personal growth and fulfillment. With each line of code written and each chapter read, I strive to weave a narrative of continuous learning and self-discovery, enriching both my professional endeavors and personal pursuits alike.</p>
          <div className="mt-6">
            <p className="font-bold mb-1">Find me on</p>
            <div className="flex items-center justify-start flex-wrap">
              <a href="https://github.com/kaipat" target="_blank"
                className="inline-flex items-center mr-4 border-b border-b-slate-300 dark:border-b-slate-300/30 hover:border-b-black dark:hover:border-b-slate-300">
                <GithubIcon className="w-[1.12rem] h-[1.12rem] mr-1"/>
                <span>GitHub</span>
              </a>
              <a href="https://discordapp.com/users/1090792016226549921" target="_blank"
                className="inline-flex items-center mr-4 border-b border-b-slate-300 dark:border-b-slate-300/30 hover:border-b-black dark:hover:border-b-slate-300">
                <DiscordIcon className="w-[1.25rem] h-[1.25rem] mr-1"/>
                <span>Discord Server</span>
              </a>
            </div>
          </div>
        </div>

        <Link href="/article" className="flex justify-center items-center border border-gray-300 w-[120px] rounded-btn absolute right-[30px] bottom-[30px] p-2 hover:cursor-pointer">
          Article
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
          </svg>
        </Link>
      </div>
      <div className="absolute bottom-2 text-sm">
        <Link href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022080917号-1</Link>
      </div>
    </main>
  );
}
