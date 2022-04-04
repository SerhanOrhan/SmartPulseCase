const { default: axios } = require("axios")

const reportController = {
    index: (req, res) => {
        return axios.get('https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history', { params: req.query })
            .then(response => {
                const manipulatedData = response.data.body.intraDayTradeHistoryList;
                let maps = manipulatedData && manipulatedData.filter((item) => {
                    return (item.conract.substring(0, 2) == "PH");
                })
                console.log(maps);
                return res.send(maps);
            })
            .catch(error => res.send(error))
    }
}

module.exports = {
    reportController: reportController
}