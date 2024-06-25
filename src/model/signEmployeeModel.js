import { supabase } from "../db/supabase.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config.js'
import bcrypt from 'bcrypt'

export class signEmployeeModel {
    static async signEmployee (body) {
        let {firstName, lastName, email, phone, password, roleId} = body;
        let salts = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(password, salts);

        try {
            const { data, error } = await supabase
            .from('employees')
            .insert([
              { first_name: firstName, 
                last_name: lastName, 
                email: email, 
                phone_number: phone, 
                password: hashPassword, 
                role_id: roleId },
            ])
            .select()
            
            if (error) return false;

           return true

        } catch (error) {
            return false;
        }
    }
}