"use client"

import { ReactNode } from "react"
import Link from "next/link"

import { Article } from "@/types/articles"

import ArticleImage from "./ArticleImage"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Paragraph } from "./ui/typography"

export const ArticleLink = ({
  article,
  children,
}: {
  article: Article
  children: ReactNode
}) => {
  return (
    <Sheet>
      <SheetTrigger className="text-left hover:text-orange-700">
        {children}
      </SheetTrigger>
      <SheetContent className="grid px-4 overflow-scroll gap-4 pt-16 data-[state=closed]:spin-out-6 data-[state=open]:spin-in-6">
        <SheetHeader>
          <SheetTitle className="text-xl">{article.title}</SheetTitle>
          <SheetDescription>{article.description}</SheetDescription>
        </SheetHeader>
        <ArticleImage
          src={article.urlToImage}
          title={article.title}
          ratio="tall"
        />
        <Paragraph>{article.content}</Paragraph>
        <SheetFooter className="mb-15">
          <Link
            href={article.url}
            className="underline justify-self-end self-end"
          >
            Read more...
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
