"use client";
import styles from './LikeButton.module.css'

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button className= {styles.like} onClick={() => setLiked(!liked)}>
      {liked ? "💐 Thank you" : "💎 Appreciate"}
    </button>
  );
}