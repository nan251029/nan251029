import { Toaster as Sonner, type ToasterProps } from "sonner";

function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="top-center"
      duration={1800}
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-card text-foreground border-border shadow-border",
          title: "text-foreground font-medium",
          description: "text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
