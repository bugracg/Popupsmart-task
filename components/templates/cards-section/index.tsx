import React, { useEffect } from "react";
import Card from "../../card";
import SecurityCard from "../../card/custom-cards/security-card";
import styles from "./cards-section.module.scss";

const CardsSection = () => {
  const [page, setPage] = React.useState(1);

  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  // const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
  // const arr = [[1,[1, 2, 3]], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

  //[["birinci sayfa resimler"],["ikinci sayfa resimler"],["üçüncü sayfa resimler"]]
  // cards[0]

  const cards = [
    [
      {
        id: 1,
        src: "/cards/page1/1.png",
      },
      {
        id: 2,
        src: "/cards/page1/2.png",
      },
      {
        id: 3,
        src: "/cards/page1/3.png",
      },
      {
        id: 4,
        src: "/cards/page1/4.png",
      },
      {
        id: 5,
        src: "/cards/page1/5.png",
      },
      {
        id: 6,
        src: "/cards/page1/6.png",
      },
      {
        id: 7,
        src: "/cards/page1/7.png",
      },
      {
        id: 8,
        src: "/cards/page1/8.png",
      },
      {
        id: 9,
        src: "/cards/page1/9.png",
      },
      {
        id: 10,
        src: "/cards/page1/10.png",
      },
      {
        id: 11,
        src: "/cards/page1/11.png",
      },
      {
        id: 12,
        src: "/cards/page1/12.png",
      },
    ],
    [
      {
        id: 1,
        src: "/cards/page2/13.png",
      },
      {
        id: 2,
        src: "/cards/page2/14.png",
      },
      {
        id: 3,
        src: "/cards/page2/15.png",
      },
      {
        id: 4,
        src: "/cards/page2/16.png",
      },
      {
        id: 5,
        src: "/cards/page2/17.png",
      },
      {
        id: 6,
        src: "/cards/page2/18.png",
      },
      {
        id: 7,
        src: "/cards/page2/19.png",
      },
      {
        id: 8,
        src: "/cards/page2/20.png",
      },
      {
        id: 9,
        src: "/cards/page2/21.png",
      },
      {
        id: 10,
        src: "/cards/page2/22.png",
      },
      {
        id: 11,
        src: "/cards/page2/23.png",
      },
      {
        id: 12,
        src: "/cards/page2/24.png",
      },
    ],
    [
      {
        id: 1,
        src: "/cards/page3/25.png",
      },
      {
        id: 2,
        src: "/cards/page3/26.png",
      },
      {
        id: 3,
        src: "/cards/page3/27.png",
      },
      {
        id: 4,
        src: "/cards/page3/28.png",
      },
      {
        id: 5,
        src: "/cards/page3/29.png",
      },
      {
        id: 6,
        src: "/cards/page3/30.png",
      },
      {
        id: 7,
        src: "/cards/page3/31.png",
      },
      {
        id: 8,
        src: "/cards/page3/32.png",
      },
      {
        id: 9,
        src: "/cards/page3/33.png",
      },
      {
        id: 10,
        src: "/cards/page3/34.png",
      },
      {
        id: 11,
        src: "/cards/page3/35.png",
      },
      {
        id: 12,
        src: "/cards/page3/36.png",
      },
    ],
  ];

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Model Card Generator</h1>
        <p>Measure your return on email marketing effort easier and</p>
        <p>faster by using thebest online tools. Popupsmart is ready to</p>
        <p>heo you build an efficient email list!</p>
      </div>
      <div className={styles.cards}>
        {cards[page - 1].map((card) => (
          <Card key={card.id} src={card.src} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={page === 1 ? styles.active : ""}
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </button>
        <button
          className={page === 2 ? styles.active : ""}
          onClick={() => {
            setPage(2);
          }}
        >
          2
        </button>
        <button
          className={page === 3 ? styles.active : ""}
          onClick={() => {
            setPage(3);
          }}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default CardsSection;
