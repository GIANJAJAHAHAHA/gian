const jimp = require(`jimp`);

module.exports = class Sofa {
    /**
     * Sofa
     * @param {image} image 
     */
    async getImage(image) {
        if (!image) throw new Error(`You must provide an image as a first argument.`);
        let bg = await jimp.read(`${__dirname}/../../assets/sofa.png`);
        let img = await jimp.read(image);
        img.circle();
        img.resize(100, 100);
        bg.composite(img, 355, 185);
        let raw;
        bg.getBuffer(`image/png`, (err, buffer) => {
            raw = buffer;
        });
        return raw;
    }
};