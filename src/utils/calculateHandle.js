import { formatCurrency } from "./currencyHandle";

export function calculateBestOption(formEvent, alcoolInput, gasInput, setInfo) {
    formEvent.preventDefault();

    let calculate = (alcoolInput / gasInput);

    if (calculate <= 0.7) {
        setInfo({
            title: "Compensa usar álcool!",
            gasolina: formatCurrency(gasInput),
            alcool: formatCurrency(alcoolInput)
        })
    } else {
        setInfo({
            title: "Compensa usar gasolina!",
            gasolina: formatCurrency(gasInput),
            alcool: formatCurrency(alcoolInput)
        })
    }
}