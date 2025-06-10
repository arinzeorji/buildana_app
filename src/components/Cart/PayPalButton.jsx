import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError}) => {
    return (
        <PayPalScriptProvider 
            options={{
                clientId:
                "AfeG8bNXbf4yyLNX_p_lVIt3Ndq_cPhpecyzFdE8VLiQevTT9CYQ6SSuiHIlL_L3TDiPxmrmHPk9AO4u"
                }}>
            
            <PayPalButtons style={{layout:"vertical"}}
            createOrder={(data, actions) =>{
                return actions.order.create({
                    purchase_units:[{amount: {value:amount}}]
                })
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(onSuccess)
            }}
            onError={onError}
            >

            </PayPalButtons>
        </PayPalScriptProvider>
    )
}

export default PayPalButton
