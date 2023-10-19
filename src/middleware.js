export { default } from "next-auth/middleware"; // defaultをママ使う。

export const config = {
    matcher: ["/((?!auth|api|login).*)"], // ?!で否定です。
};