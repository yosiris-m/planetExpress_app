import styles from "./Articles.module.scss";
import Article from "./components/Article";

function Articles({ articles }) {
  return (
    <main className={styles.box}>
      <h2 className={styles.box_title}>Nuestras ofertas Flash!!</h2>
      <div className={styles.box_articles}>
        {articles.map((item) => (
          <Article item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}

export default Articles;
