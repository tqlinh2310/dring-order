"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs({ isAdmin }) {
  const path = usePathname();
  return (
    <div className="flex mx-auto gap-2 tabs justify-center flex-wrap">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Thông tin tài khoản
      </Link>
      {isAdmin && (
        <>
          <Link
            href={"/categories"}
            className={path === "/categories" ? "active" : ""}
          >
            Quản lý danh mục
          </Link>
          <Link
            href={"/menu-items"}
            className={path.includes("menu-items") ? "active" : ""}
          >
            Quản lý sản phẩm
          </Link>
          <Link
            className={path.includes("/users") ? "active" : ""}
            href={"/users"}
          >
            Quản lý người dùng
          </Link>
        </>
      )}
      <Link className={path === "/orders" ? "active" : ""} href={"/orders"}>
        Đơn hàng
      </Link>
    </div>
  );
}
