"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Separator } from "@radix-ui/react-separator"
import {
  BanknoteIcon,
  BikeIcon,
  CpuIcon,
  FlaskConical,
  TvIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const categories = [
  { label: "business", icon: BanknoteIcon },
  { label: "entertainment", icon: TvIcon },
  { label: "science", icon: FlaskConical },
  { label: "technology", icon: CpuIcon },
  { label: "sports", icon: BikeIcon },
]

export const Categories = () => {
  return (
    <NavigationMenu className="max-w-[95vw] flex items-start justify-start">
      <NavigationMenuList>
        {categories.map((category, index) => (
          <NavigationMenuItem key={category.label}>
            <Link href={`/category/${category.label}`} passHref legacyBehavior>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-2 transition-all hover:bg-transparent hover:text-orange-800"
                )}
              >
                <div
                  className={cn(
                    {
                      "text-orange-700":
                        usePathname() === `/category/${category.label}`,
                    },
                    "flex items-center justify-between gap-2 capitalize"
                  )}
                >
                  {<category.icon className="size-4" />}
                  <span className="text-sm">{category.label}</span>
                  {index === categories.length - 1 ? null : (
                    <Separator
                      orientation="vertical"
                      className="ml-4 h-8 rotate-45 w-0.5 bg-orange-700 text-orange-700"
                    />
                  )}
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
