let APIURL = '';

switch (window.location.hostname) {
    case "localhost" || '127.0.0.1' :
        console.log(window.location.hostname)
        APIURL = 'http://localhost:4000';
        break;
    default:
    case 'https://team-c-to-do-list.herokuapp.com' :
        APIURL = 'https://to-do-list-team-c.herokuapp.com'
}

export default APIURL;