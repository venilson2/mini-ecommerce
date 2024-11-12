import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.get('/', 'OrdersController.index') 
    Route.post('/', 'OrdersController.store')
  })
  .prefix('/orders')

}).prefix('/api') 
