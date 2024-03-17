import Header from "@/components/layout/Header";
import React from "react";

interface CounterLayoutProps {
  children: React.ReactNode;
}

export default function CounterLayout({ children }: CounterLayoutProps) {
  return (
    <div>
      <Header
        message="Bem vindo ao Sistema de Contagem!"
        className="mx-auto my-3"
      />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
