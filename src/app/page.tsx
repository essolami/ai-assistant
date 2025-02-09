import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RotateCcw } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex w-full gap-2 h-full  flex-row">
        <div className="w-1/2 flex flex-col gap-2">
          <Textarea placeholder="Type your message here." className="h-full" />
          <div className="flex gap-2">
            <Button>Submit</Button>
            <Button variant="secondary">
              <RotateCcw />
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Textarea placeholder="" className="h-full bg-gray-600" disabled />
          <div className="flex gap-2 place-self-end">
            <Button variant="secondary" disabled>
              Copy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
