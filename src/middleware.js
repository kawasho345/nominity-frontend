export { default } from "next-auth/middleware"; // defaultをママ使う。

export const config = {
    matcher: ["/((?!auth|api|images|favicon.ico).*)"], // ?!で否定です。
};