const jimp = require(`jimp`);

module.exports = class Arrest {
    /**
     * Arrest
     * @param {image} image1 
     * @param {image} image2 
     */
    async getImage(image1, image2) {
        if (!image1) throw new Error(`You must provide an image as a first argument.`);
        if (!image2) throw new Error(`You must provide an image as a second argument.`);
        let base = await jimp.read(`${__dirname}/../../assets/arrest.png`);
        image1 = await jimp.read(image1);
        image2 = await jimp.read(image2);
        image1.circle();
        image2.circle();
        base.resize(425, 722);
        image1.resize(170, 170);
        image2.resize(170, 170);
        base.composite(image1, 50, 35);
        base.composite(image2, 230, 120);
        let raw;
        base.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};
