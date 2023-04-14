import json
import requests
from dtcloud import http
from dtcloud.http import request


class VueDemo(http.Controller):
  @http.route('/api/test', auth='public', type='http', cors='*', methods=['POST', 'GET'], csrf=False)
  def test(self):
    return json.dumps({
      "code": 200,
      "success": True,
      "data": {
        "list": ["test"]
      }
    })
