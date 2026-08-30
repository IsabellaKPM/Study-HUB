import { SimpleProps } from "@/shared/interfaces/simple_props.interface";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export function MainLayout({ children }: SimpleProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
