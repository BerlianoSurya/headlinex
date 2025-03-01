import dayjs from "dayjs"

import { Article } from "@/types/articles"

import { Skeleton } from "./ui/skeleton"
import { Large, Muted, Small } from "./ui/typography"

export const ArticleDetails = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col gap-2 border-b pb-4 last-of-type:border-none">
      <Small className="text-orange-700">
        {article.author || "no author"} |{" "}
        {dayjs(article.publishedAt).format("HH:mm")}
      </Small>
      <Large className="font-bold hover:text-orange-700 md:text-lg">
        {article.title}
      </Large>
      <Muted className="hidden md:block">{article.description}</Muted>
    </div>
  )
}

export const ArticleDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 border-b pb-4 last-of-type:border-none">
      <span className="text-sm text-orange-700 md:text-base">
        <Skeleton className="h-2 w-40 bg-orange-700/10" />
      </span>

      <span className="text-balance text-sm font-bold hover:text-orange-700 md:text-lg">
        <Skeleton className="h-12 w-full" />
      </span>

      <Skeleton className="h-4 w-full" />

      <Skeleton className="h-4 w-full" />
    </div>
  )
}
