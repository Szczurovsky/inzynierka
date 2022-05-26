export default function isLoggedIn() {
    if (window.sessionStorage.getItem("user") != null) {
        return false;
    } else {
        return true;
    }
}
