"use client";
import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
import { HiHome } from "react-icons/hi";

export type Items = {
  href: string;
  icon?: any;
  children: any;
};

export default function CustomBreadCrumb({ items }: { items: Items[] }) {
  const router = useRouter();
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {items.map((item, index) => (
        <Breadcrumb.Item
          key={index}
          icon={item.icon && item.icon}
          onClick={() => router.push(item.href)}
          className="cursor-pointer"
        >
          <span className="text-primary">{item.children}</span>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
