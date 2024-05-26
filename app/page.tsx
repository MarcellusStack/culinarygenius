import { ButtonAction } from "@/components/action-button";

export const experimental_ppr = true;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>home</h1>
      <ButtonAction values={{ test: "Hello World" }}>Test</ButtonAction>
    </main>
  );
}
