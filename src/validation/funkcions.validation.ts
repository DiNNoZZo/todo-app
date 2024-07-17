import { dateTimeDisplayFormat } from "@/constants/index.constants";
import { formatDate } from "@/lib/helpers";
import { isBefore, isValid } from "date-fns";
import { z } from "zod";
import { todoValidationFields } from "./todo.validation";

interface IDateValidation {
  value: string | Date | null;
  maxDate?: Date;
  maxOfValue?: boolean;
  minDate?: Date;
  withTime?: boolean;
}

interface ICheckValDate extends Omit<IDateValidation, 'value'> {
  val: any;
  ctx: z.RefinementCtx;
  valNames: Record<string, string>;
  path?: Array<string>;
}

const dateValidation = ({
  value,
  minDate = new Date('1900'),
}: IDateValidation): string => {
  const date = value && new Date(value);
  let message: string = '';
  if (!date || !isValid(date)) message = 'must be entered correctly';
  if (date && isBefore(date, minDate))
    message = `must not be less than ${formatDate(minDate, dateTimeDisplayFormat )}`;

  return message;
};

const checkValDate = ({ ctx, val, valNames, maxDate, maxOfValue, minDate, withTime, path }: ICheckValDate) => {
  const name = valNames[ctx.path[0]] || valNames[path?.[0] || ''];
  const validMessage = dateValidation({ value: val!, maxDate, withTime, maxOfValue, minDate });

  if (validMessage)
    ctx.addIssue(
      path
        ? {
            path,
            code: z.ZodIssueCode.custom,
            message: `Field "${name}" ${validMessage}`,
          }
        : {
            code: z.ZodIssueCode.custom,
            message: `Field "${name}" ${validMessage}`,
          },
    );
};

export const valDate = (val: any, ctx: z.RefinementCtx) =>
  checkValDate({ val, ctx, valNames: todoValidationFields, maxDate: new Date(), withTime: true });
