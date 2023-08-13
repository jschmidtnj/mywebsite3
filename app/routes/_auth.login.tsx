import { AppIcon } from "@components/app-icon";
import { AuthPage, ThemedTitleV2 } from "@refinedev/chakra-ui";

export default function Login() {
  return (
    <AuthPage
      type="login"
      formProps={{
        defaultValues: {
          email: "info@refine.dev",
          password: "refine-supabase",
        },
      }}
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
