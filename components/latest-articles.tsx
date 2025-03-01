import { Article } from "@/types/articles"

import { ArticleDetails, ArticleDetailsSkeleton } from "./article-details"
import { Skeleton } from "./ui/skeleton"
import { H2 } from "./ui/typography"

export const LatestArticles = ({ articles }: { articles: Array<Article> }) => {
  return (
    <div className=" flex h-full flex-col gap-4 px-4 lg:max-w-ws lg:p-0">
      <H2 className="border-none text-4xl font-bold uppercase text-orange-700">
        Latest Stories
      </H2>
      {articles.map((article) => (
        <ArticleDetails key={article.title} article={article} />
      ))}
    </div>
  )
}
export const LatestArticlesSkeleton = () => {
  return (
    <div className=" flex h-full flex-col gap-4 px-4 lg:max-w-ws lg:p-0">
      <H2 className="border-none text-4xl font-bold uppercase text-orange-700">
        Latest Stories
      </H2>
      <ArticleDetailsSkeleton />
      <ArticleDetailsSkeleton />
      <ArticleDetailsSkeleton />
    </div>
  )
}
