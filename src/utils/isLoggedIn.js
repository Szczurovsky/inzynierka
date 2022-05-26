export default function isLoggedIn() {
    if (window.sessionStorage.getItem("user") != null) {
        return true;
    } else {
        return false;
    }
}
