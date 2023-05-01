import styles from "./styles.module.css"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.main} >About NavBar</nav>
      <main>{children}</main>
    </>
  );
}
