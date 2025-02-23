import { useToast } from "./use-toast";

export function useClipboard() {
  const { toast } = useToast();

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        description: "Your text has been copied :) !",
      });
    });
  };

  return {
    copyText,
  };
}
