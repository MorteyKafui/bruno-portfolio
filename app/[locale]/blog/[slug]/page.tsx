import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/blog/article-body";
import { DisplayHeading } from "@/components/editorial/display-heading";
import { Eyebrow } from "@/components/editorial/eyebrow";
import type { Locale } from "@/i18n/config";
import { Link } from "@/i18n/navigation";
import { getPost, listPosts } from "@/lib/blog";
import { alternatesFor } from "@/lib/seo";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    listPosts(locale).map((post) => ({ locale, slug: post.slug })),
  );
}

type BlogArticleProps = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const post = getPost(locale as Locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: alternatesFor(locale as Locale, `/blog/${slug}`),
  };
}

export default async function BlogArticle({ params }: BlogArticleProps) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const post = getPost(locale as Locale, slug);
  if (!post) notFound();
  const t = await getTranslations({ locale, namespace: "Blog" });
  const fallback = post.sourceLocale !== locale;

  return (
    <main id="main" className="flex-1">
      <article className="bg-background pt-32 pb-32 text-foreground md:pt-40">
        <div className="container-editorial max-w-3xl">
          <Eyebrow className="text-accent">{post.category ?? t("eyebrow")}</Eyebrow>
          <DisplayHeading as="h1" size="md" className="mt-8">
            {post.title}
          </DisplayHeading>
          <p className="mt-6 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {t("published")} {post.date}
            </time>
          </p>
          {fallback && (
            <p className="mt-6 rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              {t("fallback")}
            </p>
          )}
          <p className="text-lead mt-10 text-muted-foreground">{post.excerpt}</p>
          <div className="mt-12">
            <ArticleBody source={post.body} />
          </div>
          <p className="mt-16">
            <Link href="/blog" className="text-sm text-foreground/80 transition-colors hover:text-accent">
              ← {t("eyebrow")}
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
