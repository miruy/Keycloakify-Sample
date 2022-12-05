import React, { useState, useRef, memo, useEffect } from "react";

// import type { KcContextType } from "./manage";
import type { KcContextType } from "./manage";

// 사용하고자 하는 객체 세팅
type KcContext_Login = Extract<KcContextType, { pageId: "login.ftl" }>;

export const Login = memo(
  ({ kcContext, ...props }: { kcContext: KcContext_Login }) => {
    console.log(kcContext);

    return (
      <div>
        <form method="post" action="/login">
          <input type="text" placeholder="ID"></input>
          <input type="password" placeholder="PASSWORD"></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
);
