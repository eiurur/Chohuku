Chohuku
======

    【Input】 Image path -> Resize(32px) + Grey scalize -> hash -> Hash value 【Output】

**Detail of the algorithm**

> <a href="http://wazanova.jp/items/1268" target="_blank">Iconfinder: 画像データの重複チェックのアルゴリズム - ワザノバ | wazanova</a>

# Installation

    npm i chohuku -S

# Usage

    const {Chohuku} = require('chohuku');
    const chohuku = new Chohuku('test.jpg');

    // Hexadecimal
    chohuku.getHash().then(hash => {
      console.log(hash);
      // c080324818f824e0
    });

    # Binarydecimal
    chohuku.getHash(2).then(hash => {
      console.log(hash);
      // 1100000010000000001100100100100000011000111110000010010011100000
    });
