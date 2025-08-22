import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("welcome")} 3BrainAI</h1>
      <p>{t("description")}</p>
      <div>
        <a href="/cs">Cs</a>
      </div>
      <div>
        <a href="/">En</a>
      </div>
      <div>
        <a href="/de">De</a>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "cs", ["common"])),
  },
});
