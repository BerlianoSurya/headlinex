import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const H1 = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      )}
    >
      {children}
    </h1>
  )
}

export const H2 = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h2
      className={cn(
        className,
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      )}
    >
      {children}
    </h2>
  )
}

export const H3 = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h3
      className={cn(
        className,
        "scroll-m-20 text-2xl font-semibold tracking-tight"
      )}
    >
      {children}
    </h3>
  )
}

export const H4 = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <h4
      className={cn(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight"
      )}
    >
      {children}
    </h4>
  )
}

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={cn(className, "leading-7 [::not(:first-child)]:mt-6")}>
      {children}
    </p>
  )
}

export const Lead = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={cn(className, "text-muted-foreground text-xl")}>{children}</p>
  )
}

export const Large = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <p className={cn(className, "text-lg font-semibold")}>{children}</p>
}

export const Small = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={cn(className, "text-sm font-medium leading-none")}>
      {children}
    </p>
  )
}

export const Muted = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={cn(className, "text-muted-foreground text-sm")}>{children}</p>
  )
}

export const Blockquote = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <blockquote className={cn(className, "border-l-2 pl-6 italic")}>
      {children}
    </blockquote>
  )
}

export const List = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <ul className={cn(className, "ml-6 list-disc [:>li]:mt-2")}>{children}</ul>
  )
}
