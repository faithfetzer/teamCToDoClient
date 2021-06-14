let APIURL = '';

switch (window.location.hostname) {
    case "localhost" :
        console.log(window.location.hostname)
        APIURL = 'http://localhost:4000';
        break;
    default:
    // case 'deployed-heroku-client.com' :
        APIURL = 'https://teamc-todo.herokuapp.com'
}

export default APIURL;