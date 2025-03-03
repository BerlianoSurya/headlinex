import dayjs from "dayjs"

import { Article } from "@/types/articles"
import { H1, Lead } from "@/components/ui/typography"

import { ArticleLink } from "./article-link"
import ArticleImage from "./ArticleImage"
import { Skeleton } from "./ui/skeleton"

export const TopHeadline = ({ article }: { article: Article }) => {
  return (
    <ArticleLink article={article}>
      <div className="grid w-full grid-rows-1 items-start gap-4 md:grid-cols-[0.35fr_0.65fr] md:gap-8">
        <div className="relative w-full md:h-full">
          <ArticleImage
            title={article.title}
            src={article.urlToImage}
            ratio="tall"
          />
        </div>
        <div className="flex w-full flex-col gap-4 px-4 lg:px-0">
          <H1>{article.title}</H1>
          <span className="block text-sm text-orange-700 md:text-base">
            {article.author} | {dayjs(article.publishedAt).format("HH:mm")}
          </span>
          <Lead>{article.description}</Lead>
        </div>
      </div>
    </ArticleLink>
  )
}

export const TopHeadlineSkeleton = () => {
  return (
    <div className="grid w-full grid-rows-1 items-start gap-4 md:grid-cols-[0.35fr_0.65fr] md:gap-8">
      <div className="relative w-full md:h-full">
        <Skeleton className="w-90 h-72" />
      </div>
      <div className="text-balance flex w-full flex-col gap-4 px-4 lg:px-0">
        <Skeleton className="w-90 h-16" />
        <Skeleton className="w-90 h-4" />
        <Skeleton className="w-90 h-4" />
      </div>
    </div>
  )
}
