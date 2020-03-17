import { addNewContact, getContacts } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get(getContacts)
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