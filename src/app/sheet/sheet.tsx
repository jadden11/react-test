import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetPage() {
  return (
    <Sheet>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        <div>Sheet Content</div>
      </SheetContent>
    </Sheet>
  );
}
