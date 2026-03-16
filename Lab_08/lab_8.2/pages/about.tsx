import { GetStaticProps } from "next";
import Link from "next/link";

interface AboutProps {
  generatedTime: string;
}

export default function AboutPage({ generatedTime }: AboutProps) {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 720, margin: "40px auto", lineHeight: 1.5 }}>
      <h1>About SSG (getStaticProps)</h1>
      <p>
        Эта страница генерируется на этапе сборки и обновляется по ISR.
      </p>
      <p>
        <strong>Время генерации:</strong> {generatedTime}
      </p>
      <p>
        Для сравнения откройте <Link href="/about-ssr">about-ssr.tsx</Link>.
      </p>
    </main>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      generatedTime: new Date().toISOString(),
    },
    revalidate: 60,
  };
};
