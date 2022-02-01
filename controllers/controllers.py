from odoo import http
from odoo.http import request


class OdooControllers(http.Controller):
    @http.route(
        ['/get_products'],
        type='json',
        auth='public',
        website=True
    )

    def get_products(self, **kw):
        #searrch([]) nos trae todos los records de la base de datos
        products = http.request.env['product.template'].sudo().search([('website_published', '=', True)], limit=6 )
        
        # return products

        p = []

        for product in products:
            n = {
                'name': product.name,
                'id': product.id
            }

            p.append(n)
        
        return p