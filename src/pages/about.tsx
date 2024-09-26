import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1
            className="font-silkscreen text-5xl bg-gradient-to-br from-secondary-500 to-primary-500 bg-clip-text text-transparent"
            style={{ fontFamily: "Silkscreen" }}
          >
            About
          </h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
