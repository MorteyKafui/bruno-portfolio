import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/editorial/eyebrow";
import { DisplayHeading } from "@/components/editorial/display-heading";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main id="main" className="container-editorial flex min-h-svh flex-col justify-center py-32">
      <Eyebrow className="text-accent">{t("eyebrow")}</Eyebrow>
      <DisplayHeading as="h1" size="lg" className="mt-8 max-w-4xl">
        {t("title")}
      </DisplayHeading>
      <p className="text-lead mt-8 max-w-md text-muted-foreground">{t("body")}</p>
      <div className="mt-12">
        <Button size="lg" nativeButton={false} render={<Link href="/" />}>
          <ArrowLeft className="size-4 rtl:-scale-x-100" />
          {t("back")}
        </Button>
      </div>
    </main>
  );
}
