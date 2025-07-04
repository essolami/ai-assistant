import { siteConfig } from "@/config/site";
import { ShareLinkDialog } from "../dialog/shareLinkDialog";

export function MainFooter() {
  return (
    <footer className="border-grid border-t py-6 md:px-8 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.website}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Hamza Essolami
            </a>
            . The source code is available on{" "}
            <ShareLinkDialog
              link={siteConfig.links.github}
              dialogTitle="Share link"
            >
              <span className="font-medium underline underline-offset-4 cursor-pointer">
                GitHub
              </span>
            </ShareLinkDialog>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
