import { Article } from "@/types/articles"

import { ArticleDetails, ArticleDetailsSkeleton } from "./article-details"
import ArticleImage from "./ArticleImage"
import { Skeleton } from "./ui/skeleton"

export const ArticlePreview = ({ article }: { article: Article }) => {
  return (
    <div className="flex gap-4">
      <div className="relative w-full rounded">
        {article?.urlToImage ? (
          <ArticleImage
            src={article.urlToImage}
            title={article.title}
            ratio="wide"
          />
        ) : null}
      </div>
      <div className="max-w-sm">
        <ArticleDetails article={article} />
      </div>
    </div>
  )
}

export const ArticlePreviewSkeleton = () => {
  return (
    <div className="flex items-start gap-4">
      <Skeleton className="h-56 w-[36rem]" />

      <div className="w-full">
        <ArticleDetailsSkeleton />
      </div>
    </div>
  )
}
