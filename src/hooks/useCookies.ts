import cookies from 'js-cookie'

export const getCookies = () => {
    let cookie = cookies.get('login');
    
    if (!cookie) return false;
    return cookie;
}