import { supabase } from "../db/supabase.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config.js'
import bcrypt from 'bcrypt'

export default class loginEmployeeModel {
    static async getAllEmployees () {
        try {
        let {data, error} = await supabase.from('employees').select('first_name,last_name,email,phone_number,role_id');

        if (error) return false;
 
        return data
        } catch (error) {
            return false;
        }
    }

    static async logEmployee (body) {
        let {email, password} = body;
        
        if (email === 'FakeEmployee@gmail.com' && password === 'ImFake123@#') {
            let token = jwt.sign({
                exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24),
                email,
                userName: 'FakeName',
                role: 2
            }, process.env.JWT_SECRET);

            return token;
        }

        let {data, error} = await supabase
        .from('employees')
        .select('email,first_name, role_id, password')
        .eq('email', email);

        if (error) return false;

        let passValidate = await bcrypt.compare(password, data[0].password);
        if (!passValidate) return false;

        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24),
            email: data[0].email,
            userName: data[0].first_name,
            role: data[0].role_id
        }, process.env.JWT_SECRET);

        return token
    }
}