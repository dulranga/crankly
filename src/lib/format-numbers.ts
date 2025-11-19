export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "AUD",
    style: "currency",
});

export const numberFormatter = new Intl.NumberFormat(undefined, {
    useGrouping: true,
});

export const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
});

export const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
});
