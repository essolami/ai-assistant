"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";

function DynamicHeader() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (!pathname || pathname === "/")
      return "Enhance your content with powerful AI tools";

    const formattedPath = pathname.substring(1).replace(/-/g, " ");

    return formattedPath
      .split("/")
      .map((segment) =>
        segment
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      )
      .join(" > ");
  };

  return (
    <Breadcrumb className="w-full">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage className="line-clamp-1">
            {getPageTitle()}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default DynamicHeader;
