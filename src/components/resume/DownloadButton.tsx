import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadButton = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <Button
      onClick={handleDownload}
      className="no-print fixed bottom-6 right-6 z-50 rounded-full shadow-lg gradient-hero border-0 text-primary-foreground hover:opacity-90 px-6 py-6 text-base gap-2"
      size="lg"
    >
      <Download className="w-5 h-5" />
      Download PDF
    </Button>
  );
};

export default DownloadButton;
