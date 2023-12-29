import { z } from 'zod'

export const AuthCredentialsValidator = z.object({
  email: z.string().email().max(255, {
    message: 'Email must be at most 255 characters long',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .max(64, {
      message: 'Password must be at most 64 characters long',
    }),
  // TODO: UNCOMMENT BEFORE DEPLOY TO PRODUCTION
  // .refine(
  //   (password) => /[A-Z]/.test(password),
  //   'Password must have at least one uppercase letter'
  // )
  // .refine(
  //   (password) => /[0-9]/.test(password),
  //   'Password must have at least one number'
  // ),
})

export type AuthCredentialsValidatorType = z.infer<
  typeof AuthCredentialsValidator
>
