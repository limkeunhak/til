function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice));

    function createStatementData(invoice) {
        let result = {};
        result.customer = invoice.customer;
        result.performances = invoice.performances.map(enrichPerformance);
        result.totalAmount = totalAmountFor(result);
        result.totalVolumeCredits = totalVolumeCredits(result);
        return result;
    }

    function enrichPerformance(perf) {
        let result = Object.assign({}, perf);
        result.play = playFor(perf);
        result.amount = amountFor(perf);
        return result;
    }
    
    function totalAmountFor(invoice) {
        let totalAmount = 0;
        for (let perf of invoice.performances) {
            totalAmount += amountFor(perf);
        }
        return totalAmount;
    }
    
    function totalVolumeCredits(invoice) {
        let volumeCredits = 0;
        for (let perf of invoice.performances) {
            volumeCredits += volumeCreditsFor(perf);
        }
        return volumeCredits;
    }
    
    function volumeCreditsFor(perf) {
        let result = Math.max(perf.audience - 30, 0);
        if ("comedy" == perf.play.type) 
            result += Math.floor(perf.audience / 5);
        return result;
    }
    
    function playFor(perf) {
        return plays[perf.playID];
    }
    
    function amountFor(perf) {
        let result = 0;
        switch (playFor(perf).type) {
            case "tragedy":
                result = 40000;
                if (perf.audience > 30) {
                    result += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (perf.audience > 20) {
                    result += 10000 + 500 * (perf.audience - 20)
                }
                result += 300 * perf.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르: ${perf.play.type}`);
        }
    
        return result;
    }
}

function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience}석)\n`;
    }

    result += `총액: ${usd(data.totalAmount/100)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
    return result;
}

function usd(number) {
    return new Intl.NumberFormat("en-US", 
                        { style: "currency", currency: "USD",
                        minimumFractionDigits: 2 }).format(number);
}

// plays.json...
const plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

// invoices.json...
const invoices = [
    {
        "customer": "BigCo",
        "performances": [
            {
                "playID": "hamlet",
                "audience": 55,
            },
            {
                "playID": "as-like",
                "audience": 35,
            },
            {
                "playID": "othello",
                "audience": 40,
            }
        ]

    }
]

module.exports = statement;
