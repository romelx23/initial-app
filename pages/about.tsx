import Link from "next/link";
import { ReactElement } from "react";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
        <h2>About Page</h2>
        <h1 className="title">
          ir a <Link href="/">Home</Link>
        </h1>

        <p className="description">
          Get started by editing <code className="code">pages/index.js</code>
        </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
