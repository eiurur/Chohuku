Chohuku
======

    【Input】 Image path -> Resize(16px) + Gray scalize -> pHash -> Hash value 【Output】

**Detail of the algorithm**

> <a href="http://wazanova.jp/items/1268" target="_blank">Iconfinder: 画像データの重複チェックのアルゴリズム - ワザノバ | wazanova</a>

# Dependencies

Chohuku depends on CImg, pHash, ImageMagicK, phash-image, GraphicsMagick.

detail <a href="https://github.com/mgmtio/phash-image" target="_blank">here</a>.

# Installation

    npm i chohuku

# Usage

    const Chohuku = require('chohuku');
    const chohuku = new Chohuku('test.jpg');

    # 8-byte
    chohuku.getPHash().then((hash) => console.log(hash));

    # ulong64 as a string
    chohuku.getPHash(true).then((hash) => console.log(hash));

    # 72-byte
    chohuku.getMH().then((mh) => console.log(mh));
