const jimp = require(`jimp`);

module.exports = class Couple {
    /**
     * Couple
     * @param {image} image1 
     * @param {image} image2 
     */
    async getImage(image1, image2) {
        if (!image1) throw new Error(`You must provide an image as a first argument.`);
        if (!image2) throw new Error(`You must provide an image as a second argument.`);
        let base = await jimp.read(__dirname/../../assets/couple.png);
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        base.resize(700, 630);
        image1.resize(170, 170);
        image2.resize(170, 170);
        base.composite(image1, 120, 10);
        base.composite(image2, 470, 60);
        let raw;
        base.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};
