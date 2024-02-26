export const formateToBr = (data: string) => {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
};
