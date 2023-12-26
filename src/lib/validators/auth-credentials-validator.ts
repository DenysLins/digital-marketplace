import { z } from 'zod'

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type AuthCredentialsValidatorType = z.infer<
  typeof AuthCredentialsValidator
>
