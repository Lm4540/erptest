const router = require("express").Router();
const ClientController = require('../CRM/Controllers/ClientController');
const SaleController = require('../CRM/Controllers/SaleController');
const InvoiceController = require('../CRM/Controllers/InvoiceController');

// Home page route.
router.get("/", function (req, res) {
    res.render('CRM/index.ejs', {pageTitle: 'Modulo CRM'});
});


/**Providers Routes */
router.get('/client', ClientController.getClientsView);
router.get('/clients', ClientController.clientsToDataTable);

router.get('/client/create', ClientController.getCreationView);
router.post('/client/create', ClientController.createClient);

router.post('/client/update', ClientController.updateClient);
router.post('/client/updateData', ClientController.updateClientData);
router.get('/client/:id(\\d+)', ClientController.getClient);
router.get('/client/:id(\\d+)/orders', ClientController.getClientOrders);
router.get('/client/view/:id(\\d+)', ClientController.viewClient);
router.get('/client/select2', ClientController.getClientToSelect2);

router.get('/create/:id(\\d+)', SaleController.createClientSale);


router.post('/addDetail', SaleController.addDetail);
router.post('/updateDetail', SaleController.updateSaleDetail);

router.get('/sale_in_room', SaleController.saleInRoomView);
router.get('/view/:id(\\d+)', SaleController.viewSale);
router.get('/inProccess', SaleController.inProccess);
router.get('/history', SaleController.history);
router.get('/history_moves', SaleController.historyData);
router.get('/invoice_serie', SaleController.invoice_serie);
router.post('/invoice_serie', SaleController.save_invoice_serie);
router.post('/update_invoice_serie', SaleController.update_invoice_serie);




/** Sucursal Routes */
/*
router.post('/sale/create', SaleController.createSucursal);
router.post('/sale/update', SaleController.updateSucursal);
router.get('/sale/:id(\\d+)', SaleController.getSucursal);
router.get('/sale/view/:id(\\d+)', SaleController.viewSucursal);

*/

module.exports = router;