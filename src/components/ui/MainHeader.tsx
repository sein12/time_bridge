import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function MainHeader() {
  return (
    <header>
    <div className="flex items-center justify-between h-12 px-4">
      {/* 뒤로가기 버튼 */}
      <div className="flex items-center">
          <Button
            className="flex items-center justify-center w-8 h-8 -ml-1 active:opacity-70"
          >
            <AlignJustify />
          </Button>
        )}
      </div>
    </div>
    </header>
  );
}
