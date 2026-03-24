import { Column } from "@/components/column";
import { Header } from "@/components/header";
import { Row } from "@/components/row";
import { Sidebar } from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Column className="gap-0 h-screen bg-neutral-900">
      <Header />
      <Row className="flex-1 min-h-0 items-stretch">
        <Sidebar />
        <div className="flex-1 min-h-0 flex overflow-hidden">{children}</div>
      </Row>
    </Column>
  );
}
