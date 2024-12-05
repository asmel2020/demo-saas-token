import { z } from "zod";

export const createMemeCoinSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    symbol: z
      .string()
      .min(2, { message: "O símbolo deve ter pelo menos 2 caracteres" }),
    initialSupply: z.preprocess(
      (val) => Number(String(val).replace(",", ".")),
      z.number().positive({
        message: "O suprimento inicial deve ser um número positivo",
      })
    ),
    isMintable: z.boolean(),
    hasPresale: z.boolean(),
    presaleStartDate: z.date(),
    presaleEndDate: z.date(),
    presalePrice: z.preprocess(
      (val) => Number(String(val).replace(",", ".")),
      z.number().positive({
        message: "O suprimento inicial deve ser um número positivo",
      })
    ),
    presaleTokenAmount: z.preprocess(
      (val) => Number(String(val).replace(",", ".")),
      z.number().positive({
        message: "O suprimento inicial deve ser um número positivo",
      })
    ),
  })
  .refine(
    (data) => {
      if (data.hasPresale) {
        return (
          data.presaleStartDate &&
          data.presaleEndDate &&
          data.presalePrice &&
          data.presaleTokenAmount
        );
      }
      return true;
    },
    {
      message:
        "Todos os campos de pré-venda são obrigatórios quando a pré-venda está ativada",
      path: ["hasPresale"],
    }
  )
  .refine((data) => data.presaleEndDate > data.presaleStartDate, {
    message: "A data de vencimento deve ser posterior à data de início",
    path: ["fechaExpiracion"],
  })
  .refine((data) => data.initialSupply > data.presaleTokenAmount, {
    message:
      "A quantidade de tokens vendidos deve ser menor em relação à quantidade inicial",
    path: ["presaleTokenAmount"],
  });

export type CreateMemeCoinFormData = z.infer<typeof createMemeCoinSchema>;
