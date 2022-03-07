

paypal.Buttons({

  // Set up the transaction
  createOrder: function(data, actions) {
      return fetch('/api/orders', {
          method: "post",
      }).then((response) => response.json())
      .then((order) => order.id)
  },
  // Finalize the transaction
  onApprove: function(data, actions) {
      return fetch(`/api/orders/${data.orderID}/capture`, {
          method: "post",
      }).then((response) => response.json())
      .then(function (orderData) {
          console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2)
          )
          var transaction = orderData.purchase_units[0].payments.captures[0];
          alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');

      })
  }

}).render('#paypal-button-container');