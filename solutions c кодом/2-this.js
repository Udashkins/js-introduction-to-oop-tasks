// BEGIN
export default function make(numer = 0, denom = 1) {
    return {
      setNumer(num) {
        this.numer = num;
      },
      setDenom(den) {
        this.denom = den;
      },
      getNumer() {
        return this.numer;
      },
      getDenom() {
        return this.denom;
      },
      toString() {
        return `${this.numer}/${this.denom}`;
      },
      add(rat) {
        const a = this.numer;
        const b = this.denom;
        const c = rat.getNumer();
        const d = rat.getDenom();
        const newNumer = a * d + b * c;
        const newDenom = b * d;
        return make(newNumer, newDenom);
      },
      numer,
      denom,
    };
  }
// END