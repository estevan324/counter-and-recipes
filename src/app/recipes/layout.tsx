import React from "react";
import Header from "@/components/layout/Header";

interface CartLayoutProps {
  children: React.ReactNode;
}

export default function CartLayout({ children }: CartLayoutProps) {
  return (
    <div>
      <Header
        message="Bem vindo ao Sistema de Receitas"
        className="mx-auto my-3"
      />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
