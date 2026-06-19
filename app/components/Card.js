import Image from "next/image";
import styles from "./Card.module.css";
import LikeButton from "./LikeButton";

export default function Card({ name, blurb, rating, emoji, image }) {
  return (
    <article className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={300} height={300}  className={styles.image}/>
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
     
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
       <p className={styles.hoverText}>{blurb}</p>
      <LikeButton /> 

      
    </article>
  );
}