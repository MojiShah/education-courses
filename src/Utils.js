export const isLogin = (username) => {
    switch (username ){
        case 'Moji' : return true;
        case 'Javad': return true;
        case 'Hossein' : return true;
        default : return false;
    }
}