// Copyright (c) 2024, Vikash Kumar and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
        },
    rate(frm)
    {

    }
});

frappe.ui.form.on('Ride Booking Item', {
    refresh(frm){
        // Your Code Here
    },

    distance(frm, cdt, cdn){
        for (let i of frm.doc.item){
            console.log(i.distance,i.source,i.destination)
        }
        
    }
})
