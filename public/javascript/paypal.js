

paypal.Buttons({

    createOrder: function() {
      return fetch('/confirmation', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          items: [{
            id: 1,
            quantity: 1
          }],
        }),
      }).then(res => {
          if (res.ok) return res.json()
          return res.json().then(json => Promise.reject(json))
        }).then(({ id }) => {
          return id
        }).catch(e => {
        console.error(e.error)
      })
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            var transaction = orderData.purchase_units[0].payments.captures[0];
            alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
      });
    }
  }).render('#paypal')



