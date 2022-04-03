const { default: axios } = require("axios")

const reportController = {
    index: (req, res) => {
        return axios.get('https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history', { params: req.query })
            .then(response => {
                const manipulatedData=response.data.body.intraDayTradeHistoryList;
                    console.log(manipulatedData.conract)
                    // manipulatedData & manipulatedData.map((item,index)=>{
                    //     const regexKod=/[0-9]/gm;
                    // if (item.conract.str.replace(regexKod,"")=="PH") {
                    //     console.log(item.conract);
                    // }
                    //     return item;
                    // })
                return res.send(manipulatedData)
            })
            .catch(error => res.send(error))
    }
}

module.exports = {
    reportController: reportController
}