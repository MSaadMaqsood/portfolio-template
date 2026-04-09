"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Bio Info", path: "/dashboard" },
  { name: "Education", path: "/dashboard/education" },
  { name: "Work Experience", path: "/dashboard/work_experience" },
  { name: "Contact List", path: "/dashboard/contact" },
  { name: "Blogs", path: "/dashboard/blogs" },
  { name: "New Blog", path: "/dashboard/blogs/new" },
  { name: "Logout", path: "/" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`${styles.link} ${
                pathname === item.path ? styles.active : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
