import z from 'zod'

interface Props {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    roleId: string;
}

const signEmployeeSchema = z.object({
    firstName: z.string().min(2, {message: "First name length has to be 2"}),
    lastName: z.string().min(2, {message: "Last name length has to be 2"}),
    email: z.string().min(10, {message: "Email length has to be 10"}).email({message: "Invalid email address"}),
    phone: z.string().min(10, {message: "Phone number length has to be 10"}).regex(/^[\s\d()+-]+$/, {message: "Invalid phone number"}),
    password: z.string().min(10, {message: "Password length has to be 10"}),
    roleId: z.string().min(1, {message: "Role id must be one character length"}).max(1, {message: "Role id must be one character length"})
});

export const signEmployeeCredentials = async (credentials : Partial<Props>) => {
    return signEmployeeSchema.safeParse(credentials);
}

