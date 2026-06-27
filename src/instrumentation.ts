/**
 * Next.js instrumentation —— 服务端启动时运行一次。
 *
 * 作用:安装进程级错误兜底。任何未被捕获的异常 / Promise 拒绝
 * (典型例子:数据库连接池在后台创建连接失败时 emit 的 'error' 事件)
 * 都会被这里接住并记录,而不会让整个 Node 进程崩溃重启。
 *
 * 没有这一层时,数据库一旦连不上,整站会陷入"不停崩溃 + 重启"的
 * 循环,表现为 502/504、页面几乎打不开。
 */
export async function register() {
  // 只在 Node.js 运行时安装;Edge 运行时(中间件)没有完整的 process API。
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  process.on("uncaughtException", (err) => {
    console.error(
      "[instrumentation] 已捕获未处理异常,进程继续运行:",
      err instanceof Error ? `${err.name}: ${err.message}\n${err.stack ?? ""}` : err,
    );
  });

  process.on("unhandledRejection", (reason) => {
    console.error(
      "[instrumentation] 已捕获未处理的 Promise 拒绝,进程继续运行:",
      reason instanceof Error
        ? `${reason.name}: ${reason.message}\n${reason.stack ?? ""}`
        : reason,
    );
  });

  console.log("[instrumentation] 进程级错误兜底已安装");
}
