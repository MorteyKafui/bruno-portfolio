import { MDXRemote } from "next-mdx-remote/rsc";

/** Renders an MDX article body with the editorial type scale. */
export function ArticleBody({ source }: { source: string }) {
  return (
    <div className="editorial-prose">
      <MDXRemote source={source} />
    </div>
  );
}
