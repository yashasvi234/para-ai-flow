import { DashboardHeader } from "@/components/DashboardHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background">
      <DashboardHeader />
      <main className="flex-1 p-6">
        {children}
      </main>
      <footer className="border-t p-4 text-center text-sm text-foreground">
        Version 1.0 – AI SCM App (Static Prototype) | Powered by Lovable
      </footer>
    </div>
  );
}