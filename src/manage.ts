import { getKcContext } from "keycloakify";

// keycloak 관련 전역변수 사용 및 관리를 위한 함수 생성
export const { kcContext } = getKcContext<{
  pageId: "login.ftl" /* 필요한 페이지마다 작성해야함 */;
}>({
  mockData: [
    {
      pageId: "login.ftl" /* 필요한 페이지마다 작성해야함 */,
    },
  ],
});

const keycloakManager = {
  kcContext,
};

export type KcContextType = NonNullable<typeof kcContext>;
export default keycloakManager;
