import { supabase } from "../db/supabase.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config.js'

export default class validationModel {
    static async validateEmployee (body) {
        if (!body) return false;

        try {
            let validation = await jwt.verify(body, process.env.NEXT_PUBLIC_JWT_SECRET);

            let {email, userName} = validation;

            let valid = await supabase
            .from('employees')
            .select('email,first_name') 
            .eq('email', email)
            .eq('first_name', userName);

            if (valid.error || valid.data.length === 0) return false
            
            return true
        } catch (error) {
            return false
        }     
    }
}