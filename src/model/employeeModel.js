import { supabase } from "../db/supabase.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config.js'
import bcrypt from 'bcrypt'

export class employeeModel {
    static async getAllEmployees () {
        try {
        let {data, error} = await supabase.from('employees').select('first_name,last_name,email,phone_number,role_id');

        if (error) return false;
 
        return data
        } catch (error) {
            return false;
        }
    }

    static async getEmployee (body) {
        let {email, userName, role} = body;
        
        let {data, error} = await supabase.from('employees')
        .select('first_name, last_name, email, phone_number')
        .eq('email', email)
        .eq('first_name', userName)
        .eq('role_id', role)

        if (error) return false;
   
        return data
    }
}