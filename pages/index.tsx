import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("welcome")} Kamos!</h1>
      <p>{t("description")}</p>
      <div>
        <Link href="/cs">Cs</Link>
      </div>
      <div>
        <Link href="/en">En</Link>
      </div>

      <div>
        <Link href="/de">De</Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "cs", ["common"])),
  },
});
