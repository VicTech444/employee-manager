import cookies from 'js-cookie'

export const getCookies = () => {
    let cookie = cookies.get('loginEmployee');
    
    if (!cookie) return false;
    return cookie;
}