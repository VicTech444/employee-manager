import z from 'zod'

const logEmployeeSchema = z.object({
    email: z.string().min(10, {message: "Email length has to be 10"}).email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "Password length has to be 8"})
});

export const validateEmployeeCredentials = async (credentials) => {
    return logEmployeeSchema.safeParse(credentials);
}

