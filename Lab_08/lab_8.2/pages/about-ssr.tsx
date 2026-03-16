import { GetServerSideProps } from "next";
import Link from "next/link";

interface AboutSsrProps {
  requestTime: string;
}

export default function AboutSsrPage({ requestTime }: AboutSsrProps) {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 720, margin: "40px auto", lineHeight: 1.5 }}>
      <h1>About SSR (getServerSideProps)</h1>
      <p>
        Эта страница рендерится на сервере при каждом запросе, поэтому время обновляется
        при каждой перезагрузке.
      </p>
      <p>
        <strong>Время запроса:</strong> {requestTime}
      </p>
      <p>
        Для сравнения откройте <Link href="/about">about.tsx</Link>.
      </p>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<AboutSsrProps> = async () => {
  return {
    props: {
      requestTime: new Date().toISOString(),
    },
  };
};
