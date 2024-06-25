import cookies from 'js-cookie'

export const useCookies = () => {
    let cookie = cookies.get('login');
    
    if (!cookie) return false;
    return cookie;
}