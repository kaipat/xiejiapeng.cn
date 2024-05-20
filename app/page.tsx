import Net from "@/components/net";
import DiscordIcon from "@/components/icons/discord";
import GithubIcon from "@/components/icons/github";
import Link from "next/link";

export default function Home() {
  return (
    // <main
    //   className="min-h-full relative bg-[url('/images/home-bg.webp')] bg-cover bg-bottom before:h-16 before:block after:h-16 after:block flex flex-col justify-center items-center">
    //   <div
    //     className="absolute inset-x-0 bottom-0 h-1/4 lg:h-1/3 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
    //     <Net/>
    //   </div>
    //   <div className="relative w-3/4 lg:w-1/2 m-auto">
    //     <div className="flex absolute -top-px h-[1px] w-2/3 left-1/2 -translate-x-1/2">
    //       <div
    //         className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
    //       <div
    //         className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
    //       <div
    //         className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
    //       <div
    //         className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
    //     </div>
    //     <div
    //       className="absolute -inset-y-8 -left-2 w-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
    //     <div
    //       className="absolute -inset-y-8 -right-2 w-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
    //     <div
    //       className="absolute -inset-x-8 top-0 h-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
    //     <div
    //       className="absolute -inset-x-8 bottom-0 h-px bg-slate-900/20 dark:bg-white/20 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
    //     <div className="p-6 leading-loose">
    //       <p><span className="text-3xl sm:text-xlfont-semibold">Hey</span>, I am <span
    //         className="font-semibold">XieJiaPeng</span>, a front-end developer.</p>
    //       <p className="mb-3">Working at Hugecore Ltd.</p>
    //       <p className="mb-2">I immerse myself in the dynamic world of web development, specializing in JavaScript and
    //         TypeScript. With Vue, React, and Tailwind CSS as my trusted companions, I craft engaging user experiences
    //         that resonate with modern design trends and user expectations. Additionally, I leverage the power of NestJS
    //         to architect robust backend solutions, ensuring seamless integration and functionality across my
    //         applications.</p>
    //       <p className="mb-2">Fuelled by an insatiable curiosity, I approach each project as an opportunity to expand my
    //         knowledge and skills. Whether it&apos;s exploring emerging technologies or diving deep into intricate coding
    //         challenges, I embrace the role of a perpetual student, constantly seeking to uncover the unknown and refine
    //         my craft.</p>
    //       <p className="mb-2">Beyond the realm of technology, I find solace and inspiration in simpler pleasures.
    //         Sharing moments over tea with my family brings a sense of tranquility, while indulging in cinematic
    //         experiences provides a welcome escape from the demands of the digital world. Moreover, my newfound passion
    //         for literature has led me to explore the realm of writing, adding yet another dimension to my life&apos;s
    //         journey.</p>
    //       <p className="mb-2">In the convergence of creativity and code, I discover not only solutions to technical
    //         problems but also avenues for personal growth and fulfillment. With each line of code written and each
    //         chapter read, I strive to weave a narrative of continuous learning and self-discovery, enriching both my
    //         professional endeavors and personal pursuits alike.</p>
    //       <div className="mt-6">
    //         <p className="font-bold mb-1">Find me on</p>
    //         <div className="flex items-center justify-start flex-wrap">
    //           <a href="https://github.com/kaipat" target="_blank"
    //              className="inline-flex items-center mr-4 border-b border-b-slate-300 dark:border-b-slate-300/30 hover:border-b-black dark:hover:border-b-slate-300">
    //             <GithubIcon className="w-[1.12rem] h-[1.12rem] mr-1"/>
    //             <span>GitHub</span>
    //           </a>
    //           <a href="https://discordapp.com/users/1090792016226549921" target="_blank"
    //              className="inline-flex items-center mr-4 border-b border-b-slate-300 dark:border-b-slate-300/30 hover:border-b-black dark:hover:border-b-slate-300">
    //             <DiscordIcon className="w-[1.25rem] h-[1.25rem] mr-1"/>
    //             <span>Discord Server</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //
    //     <Link href="/article"
    //           className="flex justify-center items-center border border-gray-300 w-[120px] rounded-btn absolute right-[30px] bottom-[30px] p-2 hover:cursor-pointer">
    //       Article
    //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
    //            stroke="currentColor" className="w-6 h-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
    //       </svg>
    //     </Link>
    //   </div>
    //   <div className="absolute bottom-2 text-sm">
    //     {/*<Link href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022080917号-1</Link>*/}
    //     {/*&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*/}
    //     <Link href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022080917号-3</Link>
    //   </div>
    // </main>
    <main
      className="min-h-full relative bg-[url('/images/home-bg.webp')] bg-cover bg-bottom before:h-16 before:block after:h-16 after:block flex flex-col justify-center items-center">
      <div
        className="absolute inset-x-0 bottom-0 h-1/4 lg:h-1/3 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <Net/>
      </div>

      <div className="text-3xl font-bold mb-7">My Article</div>

      <div className="w-1/2">
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200/60 mb-3">
          <div className="collapse-title text-xl font-medium">普通函数和箭头函数区别</div>
          <div className="collapse-content">
            <p>1. 函数声明方式不同：普通函数使用`function`关键字声明，而箭头函数使用`={">"}`标识符声明；</p>
            <p>2.
            函数体内的`this`对象不同：在普通函数中，`this`指向的是它所属的对象；而在箭头函数中，`this`指向的是它所在的上下文的`this`；</p>
            <p>3. 没有`arguments`对象：在箭头函数中，没有`arguments`对象，只能使用`...rest`语法来替代；</p>
            <p>4. 不能使用`new`运算符：箭头函数不能使用`new`运算符调用，因为它没有自己的`this`，也不能当做构造函数使用；</p>
            <p>5. 没有原型属性：箭头函数没有`prototype`属性，它不能被`instanceof`运算符识别；</p>
            <p>6. 不能使用`yield`关键字：箭头函数不能使用`yield`关键字，它只能作为普通函数的匿名函数使用。</p>
          </div>
        </div>
        <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-200/60 mb-3">
          <div className="collapse-title text-xl font-medium">new运算符的实现机制</div>
          <div className="collapse-content">
            <p>1.new运算符的实现原理是创建一个新的对象，并将构造函数的作用域赋给新对象（即this指向新对象），最后返回新对象。</p>
            <p>2. 将这个新对象的__proto__指向构造函数的prototype属性；</p>
            <p>3. 将构造函数的作用域赋给新对象（即this指向新对象；</p>
            <p>4. 执行构造函数中的代码（为新对象添加属性；</p>
            <p>5. 返回新对象。</p>
          </div>
        </div>
        <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-200/60 mb-3">
          <div className="collapse-title text-xl font-medium">call、apply、bind区别</div>
          <div className="collapse-content">
            <p>1. call和apply都是用来改变函数的运行环境，即改变函数中this的指向；</p>
            <p>2. call和apply的区别在于参数的传递，call是将参数逐个传入，而apply是将参数以数组的形式传入；</p>
            <p>3. bind方法则是返回一个改变this指向的新函数，而不会立即执行；</p>
            <p>4. bind方法可以传入参数，新函数在调用时，传入的参数将在最后面，优先级比新函数的参数低。</p>
          </div>
        </div>
        <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-200/60 mb-3">
          <div className="collapse-title text-xl font-medium">强缓存与协商缓存</div>
          <div className="collapse-content">
            <p>强缓存（Strong Cache）是一种静态的缓存技术，它是基于 HTTP 协议的，根据浏览器缓存的规则来控制缓存。它会使用
            HTTP 头中的 Cache-Control、Expires 来控制缓存，如果缓存的资源没有过期，则使用缓存的资源，没有发起 HTTP
            请求；如果缓存的资源已过期，则发起 HTTP 请求，从服务器获取最新的资源。</p>
            <p>
              <p>Cache-Control</p>
              <ul>
                <li>max-age：这个用于设置一个滑动时间，例如设置 max-age=30
                表示客户端时间向后滑动30秒，在这30秒内都是强缓存，不会去请求服务器
                </li>
                <li>s-maxage：这个和上面的一样，只不过这个设置的是代理服务器的缓存时间</li>
                <li>privte：这个表示缓存只能被客户端的浏览器缓存，不能被代理服务器缓存</li>
                <li>public：这个表示缓存既可以被浏览器缓存，也可以被代理服务器缓存</li>
                <li>no-store：这个属性表示不缓存，在任何情况下，都是与服务器进行最新的交互</li>
                <li>no-cache：这个并非不缓存的意思，这个表示强制进行协商缓存，会在下面描述</li>
              </ul>

              <p>Expires</p>
              <p>一个过期时间，和本地时间比较。</p>
              <p>协商缓存（Negotiated Cache）是一种动态的缓存技术，它是基于 HTTP 协议的，根据浏览器缓存的规则来控制缓存。它会使用
              HTTP 头中的 Last-Modified 和 If-Modified-Since 来控制缓存，如果缓存的资源没有更新，则使用缓存的资源，没有发起
              HTTP 请求；如果缓存的资源已更新，则发起 HTTP 请求，从服务器获取最新的资源。</p>

              <p>Last-Modified 和 If-Modified-Since</p>
              <p>例如，客户端请求一个 03.jpg，服务端接收到这个请求后，会读取这个文件的最后修改时间，然后设置到响应头中，设置的参数就是
              last-modified，参数值是文件最后修改的时间戳。客户端第二次请求 03.jpg 这个文件的时候，会带上一个
              If-Modified-Since
              参数，服务端能拿到这个参数与last-modified进行比对，如果一致，那么就返回304状态，否则就去请求最新的文件，注意协商缓存需要设置Cache-Control为no-cache，表示设置成协商缓存</p>

              <p>Etag</p>
              <p>Etag 是一种服务端缓存技术，它是基于 HTTP 协议的，用于控制缓存。它会使用 HTTP 头中的 Etag 和 If-None-Match
              来控制缓存，服务端会为文件生成一个指纹，类似于 MD5 字符串，然后设置 Etag 参数，参数值就是计算出的字符串，客户端接收到后，第二次请求会带上一个
              If-None-Match 的参数，接着服务端和上面第一种方式一样进行比对。如果一致，那么就返回 304 状态，否则就去请求最新的文件，注意
              Etag 缓存需要设置 Cache-Control 为 no-cache，表示设置成协商缓存。</p>
            </p>
          </div>
        </div>
        <div tabIndex={4} className="collapse collapse-arrow border border-base-300 bg-base-200/60 mb-3">
          <div className="collapse-title text-xl font-medium">XSS跨域脚本攻击</div>
          <div className="collapse-content">
            <p>一般指的是有人往网站注入恶意脚本，使之在网页中运行，从而盗取cookie等信息</p>
            <p>可达到以下攻击：</p>
            <ul>
              <li>获取页面数据，如DOM、cookie、LocalStorage</li>
              <li>DOS攻击，发送合理请求，占用服务器资源，使用户无法正常访问服务器</li>
              <li>破坏页面结构</li>
              <li>流量劫持（将链接指向某网站）</li>
            </ul>
          </div>
        </div>
        <div tabIndex={5} className="collapse collapse-arrow border border-base-300 bg-base-200/60 mb-3">
          <div className="collapse-title text-xl font-medium">CSRF跨站请求伪造</div>
          <div className="collapse-content">
            <p>攻击者诱导用户进入一个第三方网站，然后在第三方网站发送请求，同时会带走用户现有的登录状态，从而冒充用户执行请求操作本质是利用Cookie会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充</p>
            <p>防御</p>
            <ul>
              <li>同源检测：服务端对请求头中的origin和referer进行检测，但是这两个字段也可以伪造</li>
              <li>使用Token：Token与Cookie不同的就是，Token是可以用户选择性发送，Cookie是主动携带</li>
              <li>Samesite：设置Cookie的Samesite为严格模式，限制不被第三方网站使用Samesite</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 text-sm">
        <Link href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022080917号-3</Link>
      </div>
    </main>
  )
  ;
}
