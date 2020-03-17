import { addNewContact, getContacts } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Reqest from ${ req.originalUrl }`);
            console.log(`Request type ${ req.method }`);
            next();
        }, getContacts)
        .post(addNewContact);

    app.route('/contact/:contactID')
        .put((req, res) => {
            res.send('POST request successful!');
        })
    
    app.route('/contact/:contactID')
        .delete((req, res) => {
            res.send('DELETE request successful!');
        });
}

export default routes;