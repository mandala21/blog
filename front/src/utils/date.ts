import { format } from "date-fns";
import pt  from "date-fns/locale/pt-BR";

export const parseDateToBr = (date: Date, strFormat: string) => {
    return format(date, strFormat, { locale: pt });
}