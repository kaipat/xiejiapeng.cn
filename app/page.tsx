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
          <p className="mb-3">Working at <a href="https://www.hugecore.net" target="_blank"
            className="border-b border-b-slate-300 dark:border-b-slate-300/30 hover:border-b-black dark:hover:border-b-slate-300 ">Hugecore
            Ltd</a>.</p>
          <p className="mb-3">I code in JavaScript or TypeScript and use Vue, React, and Tailwind CSS in my daily
            projects. I also use NestJS to develop my backend applications. I consider myself a student in the field of
            technology, always maintaining curiosity and continuously learning about the unknown.</p>
          <p>Besides coding, I enjoy watching movies and having tea with my family; it is quite relaxing for me.
            Occasionally, I also read books and have started trying my hand at writing. I hope these activities bring a
            different dimension to my life.</p>
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
      </div>
      <div className="absolute bottom-2 text-sm">
        <Link href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022080917号-1</Link>
      </div>
    </main>
  );
}
