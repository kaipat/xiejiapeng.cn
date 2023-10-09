import Net from "@/components/net";
import DiscordIcon from "@/components/icons/discord";
import GithubIcon from "@/components/icons/github";

export default function Home() {
  return (
    <main className="relative h-full bg-[url('/images/home-bg.png')] bg-cover flex justify-center items-center">
      <div className="absolute inset-x-0 bottom-0 h-1/4 lg:h-1/3 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <Net />
      </div>
      <div className="relative w-3/4 lg:w-1/2">
        <div className="flex absolute -bottom-px h-[1px] w-2/3 left-1/2 -translate-x-1/2">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
        <div className="absolute -inset-y-8 -left-2 w-px bg-slate-900/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div className="absolute -inset-y-8 -right-2 w-px bg-slate-900/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div className="absolute -inset-x-8 bottom-0 h-px bg-slate-900/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <div className="p-6 leading-relaxed">
          <p className="text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] mb-2">hello</p>
          <p>Hey, I am XieJiaPeng, a front-end developer.</p>
          <p>Working at </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at, cumque dicta dolorum eaque illo illum ipsum, nobis nulla possimus quam quo quos ratione ullam vel veniam veritatis voluptas voluptate.</p>

          <div className="mt-6">
            <p className="font-bold mb-1">Find me on</p>
            <div className="flex items-center justify-start flex-wrap">
              <a href="/" target="_blank" className="inline-flex items-center mr-4 border-b border-b-slate-300 hover:border-b-black">
                <GithubIcon className="w-[1.12rem] h-[1.12rem] mr-1"/>
                <span>GitHub</span>
              </a>
              <a href="/" target="_blank" className="inline-flex items-center mr-4 border-b border-b-slate-300 hover:border-b-black">
                <DiscordIcon className="w-[1.25rem] h-[1.25rem] mr-1"/>
                <span>Discord Server</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
