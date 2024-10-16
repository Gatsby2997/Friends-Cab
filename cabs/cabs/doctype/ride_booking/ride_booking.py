# Copyright (c) 2024, Vikash Kumar and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class RideBooking(Document):
	def validate(self):
		if not self.rate:
			self.rate = frappe.db.get_single_value("Cabs Settings", "standard_rate")
		t=0
		for i in (self.item):
			t+=(i.distance*self.rate)
		
		self.total_amount = t
