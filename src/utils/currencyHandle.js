export function formatCurrency(value) {
    let formatedValue = value.toLocaleString("pt-br",
        {
            style: "currency",
            currency: "BRL"
        })

    return formatedValue;

}