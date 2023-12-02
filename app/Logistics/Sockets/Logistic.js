//Imports


//Controlladores

const SalesStatusController = require('../Controllers/SalesStatusController');
const StockController = require('../../Inventory/Controllers/StockController');

module.exports = async (io, socket) => {
  _io = io.of('/logistics');
  let group_identification = 'user__' + socket.request.session.userSession.id;
  socket.join(group_identification);

  _io.to(group_identification).emit("logistics data", await SalesStatusController.get_data());


  socket.on('package_ready', async data => {
    let res = await SalesStatusController.package_ready(data.sale_id, socket.request.session.userSession);
    if (res.status == 'success') {
      io.of('/logistics').emit('package_ready_success', res.sale);
    } else {
      _io.to(group_identification).emit("package_ready_error", { errorMessage: res.message, _process: data._process });
    }

  });

  socket.on('save_new_transfer', async data => {
    let permissions = socket.request.session.userSession.permission;
    if(permissions.includes('trasnfer_between_warehouses') || permissions.includes('trasnfer_between_all_warehouses')){
      let res = await StockController.saveTransferShipment(data, socket.request.session.userSession);
      if (res.status == 'success') {
        _io.to(group_identification).emit("save_new_transfer_success", { shipment: res.shipment, _process: data._process });
      } else {
        _io.to(group_identification).emit("save_new_transfer_error", { errorMessage: res.message, _process: data._process });
      }

    }else {
      _io.to(group_identification).emit("save_new_transfer_error", { errorMessage: 'No tienes permiso para realizar esta operación', _process: data._process });
    }
  });


  // socket.on("order:create", createOrder);
  // socket.on("order:read", readOrder);
}