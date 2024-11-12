import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.group(() => {
    Route.post('/process', 'PaymentsController.processPayment') 
  })
  .prefix('/payments')

}).prefix('/api') 
