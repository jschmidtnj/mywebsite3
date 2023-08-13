import { AppIcon } from "@components/app-icon";
import { AuthPage, ThemedTitleV2 } from "@refinedev/chakra-ui";

export default function Register() {
  return (
    <AuthPage
      type="register"
      title={
        <ThemedTitleV2
          collapsed={false}
          text="joshuaschmidt.tech"
          icon={<AppIcon />}
        />
      }
    />
  );
}
