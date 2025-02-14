class BetTransaction extends lisk.transactions.BaseTransaction {
    static get TYPE () {
        return 1001;
    }
    static get FEE () {
        return `${10 ** 7}`;
    };
    assetToBytes() {
	    const { data } = this.asset;
	    var encoder = new TextEncoder();
	    return data ? encoder.encode(data) : encoder.encode("");
	}
}
