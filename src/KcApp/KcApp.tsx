import type { KcContext } from "./kcContext";
import KcAppBase, { defaultKcProps, useI18n } from "keycloakify";
import "./index.css";

export type Props = {
  kcContext: KcContext;
};

export default function KcApp(props: Props) {
  const { kcContext } = props;

  const i18n = useI18n({
    kcContext,
    // NOTE: Here you can override the default i18n messages
    // or define new ones that, for example, you would have
    // defined in the Keycloak admin UI for UserProfile
    // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
    extraMessages: {
      ko: {
        foo: "foo in English",
        // Here we overwrite the default english value for the message "doForgotPassword"
        // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
        doForgotPassword: "비밀번호를 잊어버렸나요?",
      },
    },
  });

  //NOTE: Locale not yet downloaded
  if (i18n === null) {
    return null;
  }

  /*
   * Examples assuming i18n.currentLanguageTag === "en":
   * i18n.msg("access-denied") === <span>Access denied</span>
   * i18n.msg("foo") === <span>foo in English</span>
   */

  return (
    <KcAppBase
      kcContext={kcContext}
      i18n={i18n}
      {...{
        ...defaultKcProps,
        kcHeaderWrapperClass: "my-class",
        kcLoginClass: "my-class2",
      }}
    />
  );
}
