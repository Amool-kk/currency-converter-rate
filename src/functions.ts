const unirest = require("unirest");
const cheerio = require("cheerio");

export interface CCRProps {
    from: string,
    to: string,
    afterDecimal?: number | 2
}

export const CCR = async ({ from, to, afterDecimal }: CCRProps): Promise<number> => {
    const url = `https://www.google.com/search?q=${from}+to+${to}`;
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    }
    try {
        const response = await unirest.get(url).headers(headers);

        const $ = cheerio.load(response.body);

        const data: number = parseFloat($('div[data-attrid="Converter"] > div > div').children().eq(1).children().eq(0).attr("data-value"));

        if (!data) {
            return 0;
        }

        if (!afterDecimal) {
            return parseFloat(data.toFixed(2));
        }

        return parseFloat(data.toFixed(afterDecimal));
    } catch (error) {
        return 0;
    }
}