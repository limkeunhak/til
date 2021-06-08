const statement = require('../refacto_2/refacto_2');
const assert = require("assert"); 

describe('Refactoring 2', function () {
    beforeEach(function() {
        this.invoices = [
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

        this.plays = {
            "hamlet": {"name": "Hamlet", "type": "tragedy"},
            "as-like": {"name": "As You Like It", "type": "comedy"},
            "othello": {"name": "Othello", "type": "tragedy"}
        };
    });

    it('refacto should return string', function (done) {
        const expected = "청구 내역 (고객명: BigCo)\n" +
            " Hamlet: $650.00 (55석)\n" +
            " As You Like It: $580.00 (35석)\n" +
            " Othello: $500.00 (40석)\n" +
            "총액: $1,730.00\n" +
            "적립 포인트: 47점\n";
        const actual = statement(this.invoices[0], this.plays) ;
        assert.strictEqual(actual, expected);
        done();
    })
})