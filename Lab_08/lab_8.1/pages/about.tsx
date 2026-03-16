import { GetStaticProps } from "next";
import Link from "next/link";

interface AboutStaticProps {
  generatedAt: string;
}

export default function AboutPage({ generatedAt }: AboutStaticProps) {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 720, margin: "40px auto", lineHeight: 1.5 }}>
      <h1>About (SSG: getStaticProps)</h1>
      <p>
        Эта страница сгенерирована во время билда и не меняется при обычной перезагрузке.
      </p>
      <p>
        <strong>Время генерации:</strong> {generatedAt}
      </p>
      <p>
        Для сравнения откройте <Link href="/about-ssr">about-ssr.tsx</Link>.
      </p>
    </main>
  );
}

export const getStaticProps: GetStaticProps<AboutStaticProps> = async () => {
  return {
    props: {
      generatedAt: new Date().toISOString(),
    },
  };
};
